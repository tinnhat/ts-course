import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.6)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(14,116,144,0.18),_transparent_45%),_radial-gradient(circle_at_80%_0%,_rgba(15,23,42,0.12),_transparent_45%)]" />
      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <Badge className="w-fit bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
            Beginner to Advanced
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Học TypeScript bài bản, dễ hiểu, có lộ trình rõ ràng.
          </h1>
          <p className="text-lg leading-8 text-slate-600">
            Tập trung vào core concepts, ví dụ thực tế, bài tập theo độ khó, và
            mở khóa theo tiến độ học. Nội dung giữ nguyên các thuật ngữ chuyên
            ngành để bạn dễ đọc docs gốc.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
              <Link href="#topics">Bắt đầu học</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300">
              <Link href="#frameworks">TypeScript + Frameworks</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-950 p-6 text-slate-100">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Sample</p>
          <h3 className="mt-3 text-xl font-semibold">Type-safe everywhere</h3>
          <pre className="mt-4 whitespace-pre-wrap rounded-xl bg-slate-900 p-4 text-sm text-slate-200">
{`type Course = {
  id: string
  title: string
  level: "basic" | "advanced"
}

function getTitle(course: Course) {
  return course.title
}`}
          </pre>
          <p className="mt-4 text-sm text-slate-400">
            TypeScript giúp bạn tránh lỗi từ sớm, code rõ ràng và dễ bảo trì.
          </p>
        </div>
      </div>
    </section>
  );
}
