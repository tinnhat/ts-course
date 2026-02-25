"use client";

import { useMemo, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { githubLight } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import type { Exercise } from "@/data/topics";
import { useProgress } from "@/lib/progress-client";

type ExerciseListProps = {
  topicId: string;
  exercises: Exercise[];
};

const difficultyLabel: Record<Exercise["difficulty"], string> = {
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
  challenge: "Thử thách",
};

type CheckResult = {
  status: "idle" | "pass" | "fail";
  message?: string;
};

const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/["'`]/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}()[\];,])\s*/g, "$1")
    .trim();

const tokenMatches = (input: string, token: string) => {
  if (token.startsWith("re:")) {
    const pattern = token.slice(3);
    try {
      const regex = new RegExp(pattern, "i");
      return regex.test(input);
    } catch {
      return false;
    }
  }

  const normalized = normalize(token);

  if (normalized.includes("|")) {
    const parts = normalized.split("|").map((part) => part.trim()).filter(Boolean);
    return parts.every((part) => input.includes(part));
  }

  if (normalized.includes("=")) {
    const leftSide = normalized.split("=")[0]?.trim() ?? normalized;
    const declMatch = leftSide.match(/^(const|let|var)\s+(\w+)/);
    if (declMatch) {
      const name = declMatch[2];
      const declRegex = new RegExp(`\\b(const|let|var)\\s+${name}\\b`, "i");
      return declRegex.test(input);
    }
    return input.includes(leftSide);
  }

  const arrayGeneric = normalized.match(/^array<\s*([a-zA-Z_]\w*)\s*>$/);
  if (arrayGeneric) {
    const typeName = arrayGeneric[1];
    const arrayRegex = new RegExp(`array<\\s*${typeName}\\s*>|${typeName}\\s*\\[\\s*\\]`, "i");
    return arrayRegex.test(input);
  }

  const arrayShort = normalized.match(/^([a-zA-Z_]\w*)\s*\[\s*\]$/);
  if (arrayShort) {
    const typeName = arrayShort[1];
    const arrayRegex = new RegExp(`array<\\s*${typeName}\\s*>|${typeName}\\s*\\[\\s*\\]`, "i");
    return arrayRegex.test(input);
  }

  return input.includes(normalized);
};

export default function ExerciseList({ topicId, exercises }: ExerciseListProps) {
  const {
    isReady,
    toggleExercise,
    setExerciseCompleted,
    isExerciseCompleted,
    getTopicCompletion,
  } = useProgress();
  const progress = getTopicCompletion(topicId);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<string, CheckResult>>({});
  const extensions = useMemo(
    () => [javascript({ typescript: true, jsx: true })],
    []
  );

  const handleCheck = (exercise: Exercise) => {
    const input = normalize(answers[exercise.id] ?? "");
    const expected = exercise.expected ?? [];

    if (!input.length) {
      setResults((prev) => ({
        ...prev,
        [exercise.id]: { status: "fail", message: "Vui lòng nhập đáp án trước." },
      }));
      return;
    }

    if (expected.length === 0) {
      setExerciseCompleted(topicId, exercise.id, true);
      setResults((prev) => ({
        ...prev,
        [exercise.id]: { status: "pass", message: "Đã lưu đáp án." },
      }));
      return;
    }

    const matched = expected.every((token) => tokenMatches(input, token));
    if (matched) {
      setExerciseCompleted(topicId, exercise.id, true);
      setResults((prev) => ({
        ...prev,
        [exercise.id]: { status: "pass", message: "Đúng rồi!" },
      }));
    } else {
      setExerciseCompleted(topicId, exercise.id, false);
      setResults((prev) => ({
        ...prev,
        [exercise.id]: { status: "fail", message: "Chưa đúng, thử lại nhé." },
      }));
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Bài tập</p>
          <h3 className="text-2xl font-semibold text-slate-900">Bài tập thực hành</h3>
        </div>
        <div className="min-w-[180px]">
          <Progress value={progress} className="h-2" />
          <p className="mt-2 text-xs text-slate-500">{progress}% hoàn thành</p>
        </div>
      </div>
      <div className="grid gap-4">
        {exercises.map((exercise) => {
          const completed = isExerciseCompleted(topicId, exercise.id);
          const result = results[exercise.id]?.status ?? "idle";
          const resultMessage = results[exercise.id]?.message;
          return (
            <Card key={exercise.id} className="border-slate-200 bg-white">
              <CardContent className="grid gap-4 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-slate-900 text-white">{exercise.title}</Badge>
                      <Badge variant="outline" className="border-slate-300 text-slate-600">
                        {difficultyLabel[exercise.difficulty]}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{exercise.prompt}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      onClick={() => handleCheck(exercise)}
                      disabled={!isReady || completed}
                      className="bg-slate-900 text-white hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Kiểm tra đáp án
                    </Button>
                    <Button
                      onClick={() => toggleExercise(topicId, exercise.id)}
                      disabled={!isReady}
                      className={
                        completed
                          ? "bg-emerald-600 text-white hover:bg-emerald-600"
                          : "border-slate-300"
                      }
                      variant={completed ? "default" : "outline"}
                    >
                      {completed ? "Đã hoàn thành" : "Tự đánh dấu"}
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Trình soạn thảo
                  </label>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <CodeMirror
                      value={answers[exercise.id] ?? ""}
                      height="160px"
                      theme={githubLight}
                      extensions={extensions}
                      onChange={(value) =>
                        setAnswers((prev) => ({
                          ...prev,
                          [exercise.id]: value,
                        }))
                      }
                      placeholder="Nhập đáp án TypeScript của bạn ở đây..."
                      editable={!completed}
                      basicSetup={{
                        lineNumbers: true,
                        highlightActiveLine: true,
                        highlightActiveLineGutter: true,
                      }}
                    />
                  </div>
                  {completed ? (
                    <p className="text-xs text-emerald-600">
                      Bài này đã hoàn thành, editor đã được khóa.
                    </p>
                  ) : null}
                  {result !== "idle" ? (
                    <div
                      className={`rounded-xl px-4 py-2 text-sm font-medium ${
                        result === "pass"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-rose-100 text-rose-700"
                      }`}
                    >
                      {resultMessage}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        className="border-slate-300 disabled:cursor-not-allowed disabled:opacity-60"
                        disabled={completed}
                      >
                        Gợi ý
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs text-sm">
                      {exercise.hint}
                    </TooltipContent>
                  </Tooltip>
                  <details className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2">
                    <summary className="cursor-pointer text-sm font-semibold text-slate-700">
                      Xem lời giải mẫu
                    </summary>
                    <pre className="mt-3 whitespace-pre-wrap rounded-lg bg-white p-3 text-sm text-slate-700">
{exercise.solution}
                    </pre>
                  </details>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
