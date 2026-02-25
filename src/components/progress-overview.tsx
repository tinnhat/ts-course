"use client";

import { Progress } from "@/components/ui/progress";

type ProgressOverviewProps = {
  value: number;
};

export default function ProgressOverview({ value }: ProgressOverviewProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Progress
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">
            Tổng tiến độ học
          </h2>
        </div>
        <p className="text-3xl font-semibold text-slate-900">{value}%</p>
      </div>
      <Progress value={value} className="mt-4 h-2" />
      <p className="mt-3 text-sm text-slate-500">
        Hoàn thành tất cả bài tập trong chủ đề hiện tại để mở khóa chủ đề tiếp
        theo.
      </p>
    </div>
  );
}
