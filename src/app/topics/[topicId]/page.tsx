"use client";

import { useParams } from "next/navigation";
import AppShell from "@/components/app-shell";
import TopicHeader from "@/components/topic-header";
import TopicOutline from "@/components/topic-outline";
import ExampleBlock from "@/components/example-block";
import ExerciseList from "@/components/exercise-list";
import LockedOverlay from "@/components/locked-overlay";
import QuizPanel from "@/components/quiz-panel";
import { topics } from "@/data/topics";
import { useProgress } from "@/lib/progress-client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TopicPage() {
  const params = useParams<{ topicId: string }>();
  const topic = topics.find((item) => item.id === params.topicId);
  const { isTopicUnlocked, getTopicCompletion, hasPassedQuiz, setQuizResult, isReady } =
    useProgress();

  if (!topic) {
    return (
      <AppShell>
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Không tìm thấy chủ đề</h1>
          <p className="mt-3 text-sm text-slate-600">
            Hãy quay lại danh sách chủ đề để chọn nội dung khác.
          </p>
          <Button asChild className="mt-6 bg-slate-900 text-white hover:bg-slate-800">
            <Link href="/">Quay về trang chủ</Link>
          </Button>
        </div>
      </AppShell>
    );
  }

  const isUnlocked = isTopicUnlocked(topic.id);
  const topicIndex = topics.findIndex((item) => item.id === topic.id);
  const previousTopicId = topics[topicIndex - 1]?.id ?? topics[0].id;
  const nextTopicId = topics[topicIndex + 1]?.id;
  const isExercisesDone = getTopicCompletion(topic.id) === 100;
  const quizPassed = hasPassedQuiz(topic.id);
  const isCompleted = isExercisesDone && quizPassed;

  return (
    <AppShell>
      <div className="space-y-8">
        <TopicHeader title={topic.title} description={topic.description} level={topic.level} />
        {!isUnlocked ? (
          <LockedOverlay previousTopicId={previousTopicId} />
        ) : (
          <div className="grid gap-8">
            <TopicOutline title={topic.title} theory={topic.theory} />
            <div className="grid gap-6 lg:grid-cols-2">
              {topic.examples.map((example) => (
                <ExampleBlock key={example.title} {...example} />
              ))}
            </div>
            <ExerciseList topicId={topic.id} exercises={topic.exercises} />
            {isExercisesDone ? (
              <QuizPanel
                topicId={topic.id}
                questions={topic.quiz}
                isReady={isReady}
                alreadyPassed={quizPassed}
                onSubmitResult={(score, passed) => setQuizResult(topic.id, score, passed)}
              />
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
                Hoàn thành tất cả bài tập để mở khóa bài kiểm tra kiến thức.
              </div>
            )}
            {isCompleted && nextTopicId ? (
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald-600">Hoàn thành</p>
                  <h3 className="mt-2 text-xl font-semibold text-emerald-900">
                    Bạn đã hoàn thành chủ đề này
                  </h3>
                  <p className="mt-2 text-sm text-emerald-700">
                    Bấm để chuyển sang chủ đề kế tiếp.
                  </p>
                </div>
                <Button asChild className="bg-emerald-600 text-white hover:bg-emerald-500">
                  <Link href={`/topics/${nextTopicId}`}>Sang chủ đề tiếp theo</Link>
                </Button>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </AppShell>
  );
}
