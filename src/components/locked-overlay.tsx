import Link from "next/link";
import { Button } from "@/components/ui/button";

type LockedOverlayProps = {
  previousTopicId: string;
};

export default function LockedOverlay({ previousTopicId }: LockedOverlayProps) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white/80 p-10 text-center shadow-sm">
      <h2 className="text-2xl font-semibold text-slate-900">Chưa mở khóa</h2>
      <p className="mt-3 text-sm text-slate-600">
        Hoàn thành tất cả bài tập của chủ đề trước để mở khóa nội dung này.
      </p>
      <Button asChild className="mt-6 bg-slate-900 text-white hover:bg-slate-800">
        <Link href={`/topics/${previousTopicId}`}>Quay lại chủ đề trước</Link>
      </Button>
    </div>
  );
}
