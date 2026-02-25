type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{eyebrow}</p>
      <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-6 text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
