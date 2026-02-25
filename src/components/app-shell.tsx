import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "@/components/theme-toggle";

type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_40%),_radial-gradient(circle_at_80%_20%,_rgba(14,116,144,0.08),_transparent_35%)]">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-white/70 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
              TS
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                TypeScript Lab
              </p>
              <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Learn TypeScript
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Badge className="bg-slate-900 text-white hover:bg-slate-900 dark:bg-slate-100 dark:text-slate-900">
              Personal Edition
            </Badge>
          </div>
        </div>
        <Separator className="bg-slate-200 dark:bg-slate-800" />
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
