"use client";

import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { QuizQuestion } from "@/data/topics";

type QuizPanelProps = {
  topicId: string;
  questions: QuizQuestion[];
  passRate?: number;
  isReady: boolean;
  alreadyPassed: boolean;
  onSubmitResult: (score: number, passed: boolean) => void;
};

type AnswersMap = Record<string, number | null>;

const defaultPassRate = 0.7;

export default function QuizPanel({
  topicId,
  questions,
  passRate = defaultPassRate,
  isReady,
  alreadyPassed,
  onSubmitResult,
}: QuizPanelProps) {
  const [answers, setAnswers] = useState<AnswersMap>(() =>
    questions.reduce((acc, q) => ({ ...acc, [q.id]: null }), {})
  );
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!submitted) return 0;
    const correct = questions.filter(
      (q) => answers[q.id] !== null && answers[q.id] === q.answerIndex
    ).length;
    return Math.round((correct / questions.length) * 100);
  }, [answers, questions, submitted]);

  const passed = submitted && score >= Math.round(passRate * 100);
  const handleSubmit = () => {
    setSubmitted(true);
    const correct = questions.filter(
      (q) => answers[q.id] !== null && answers[q.id] === q.answerIndex
    ).length;
    const nextScore = Math.round((correct / questions.length) * 100);
    const nextPassed = nextScore >= Math.round(passRate * 100);
    onSubmitResult(nextScore, nextPassed);
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Quiz</p>
          <h3 className="text-2xl font-semibold text-slate-900">Bài kiểm tra kiến thức</h3>
          <p className="mt-2 text-sm text-slate-600">
            Bạn cần đạt tối thiểu {Math.round(passRate * 100)}% để mở khóa chủ đề tiếp theo.
          </p>
        </div>
        {alreadyPassed ? (
          <Badge className="bg-emerald-100 text-emerald-700">Đã đạt</Badge>
        ) : null}
      </div>
      <div className="grid gap-4">
        {questions.map((question, index) => (
          <Card key={question.id} className="border-slate-200 bg-white">
            <CardContent className="space-y-4 p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Câu {index + 1}
                </p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">
                  {question.question}
                </h4>
              </div>
              <div className="grid gap-2">
                {question.options.map((option, optionIndex) => {
                  const selected = answers[question.id] === optionIndex;
                  const isCorrect = submitted && optionIndex === question.answerIndex;
                  const isWrong = submitted && selected && optionIndex !== question.answerIndex;
                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={!isReady || alreadyPassed}
                      onClick={() =>
                        setAnswers((prev) => ({
                          ...prev,
                          [question.id]: optionIndex,
                        }))
                      }
                      className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
                        selected
                          ? "border-slate-900 bg-slate-900 text-white"
                          : "border-slate-200 bg-white text-slate-700 hover:border-slate-400"
                      } ${
                        isCorrect
                          ? "border-emerald-500 bg-emerald-50 text-emerald-800"
                          : ""
                      } ${
                        isWrong ? "border-rose-400 bg-rose-50 text-rose-700" : ""
                      } ${
                        !isReady || alreadyPassed
                          ? "cursor-not-allowed opacity-60"
                          : "cursor-pointer"
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
              {submitted ? (
                <p className="text-sm text-slate-500">{question.explanation}</p>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button
          onClick={handleSubmit}
          disabled={!isReady || alreadyPassed}
          className="bg-slate-900 text-white hover:bg-slate-800"
        >
          Nộp bài
        </Button>
        {submitted ? (
          <div
            className={`rounded-2xl px-4 py-2 text-sm font-semibold ${
              passed ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
            }`}
          >
            Kết quả: {score}% {passed ? "- Đạt" : "- Chưa đạt"}
          </div>
        ) : null}
      </div>
    </section>
  );
}
