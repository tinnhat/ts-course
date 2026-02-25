import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type ExampleBlockProps = {
  title: string;
  code: string;
  note?: string;
};

export default function ExampleBlock({ title, code, note }: ExampleBlockProps) {
  return (
    <Card className="border-slate-200 bg-slate-950 text-slate-100">
      <CardContent className="space-y-4 p-6">
        <div className="flex items-center gap-3">
          <Badge className="bg-slate-800 text-slate-200">Ví dụ</Badge>
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <pre className="whitespace-pre-wrap rounded-xl bg-slate-900 p-4 text-sm text-slate-200">
{code}
        </pre>
        {note ? <p className="text-sm text-slate-400">{note}</p> : null}
      </CardContent>
    </Card>
  );
}
