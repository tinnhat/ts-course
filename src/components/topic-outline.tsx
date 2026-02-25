import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type TopicOutlineProps = {
  title: string;
  theory: string[];
};

export default function TopicOutline({ title, theory }: TopicOutlineProps) {
  return (
    <Card className="border-slate-200 bg-white">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-3">
          <Badge className="bg-slate-900 text-white">Lý thuyết</Badge>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        </div>
        <ul className="grid gap-2 text-sm text-slate-600">
          {theory.map((item) => (
            <li key={item} className="rounded-xl bg-slate-50 px-4 py-2">
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
