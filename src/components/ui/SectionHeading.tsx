interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
