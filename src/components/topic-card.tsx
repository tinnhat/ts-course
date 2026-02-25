import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type TopicCardProps = {
  id: string;
  title: string;
  description: string;
  level: string;
  progress: number;
  locked: boolean;
};

export default function TopicCard({
  id,
  title,
  description,
  level,
  progress,
  locked,
}: TopicCardProps) {
  return (
    <Card className="flex h-full flex-col border-slate-200 bg-white/80 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="border-slate-300 text-slate-600">
            {level}
          </Badge>
          {locked ? (
            <Badge className="bg-slate-200 text-slate-500">Đã khóa</Badge>
          ) : progress === 100 ? (
            <Badge className="bg-emerald-100 text-emerald-700">Hoàn thành</Badge>
          ) : (
            <Badge className="bg-amber-100 text-amber-700">Đang học</Badge>
          )}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Progress value={locked ? 0 : progress} className="h-2" />
        <p className="text-xs text-slate-500">
          {locked ? "Hoàn thành chủ đề trước để mở khóa." : `${progress}% hoàn thành`}
        </p>
      </CardContent>
      <CardFooter className="mt-auto">
        {locked ? (
          <div className="inline-flex w-full items-center justify-center rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400 cursor-not-allowed">
            Đã khóa
          </div>
        ) : (
          <Link
            href={`/topics/${id}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Vào học
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
