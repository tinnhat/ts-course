import { Badge } from "@/components/ui/badge";

type TopicHeaderProps = {
  title: string;
  description: string;
  level: string;
};

export default function TopicHeader({ title, description, level }: TopicHeaderProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <Badge className="bg-slate-900 text-white">{level}</Badge>
          <h1 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
        </div>
      </div>
    </section>
  );
}
