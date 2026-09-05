interface SectionTitleProps {
  line1: string;
  line1Light?: boolean;
  line2: string;
  className?: string;
}

export function SectionTitle({
  line1,
  line1Light = false,
  line2,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`mb-16 ${className}`}>
      <h2 className="mb-4 font-['Manrope'] text-4xl text-black md:text-5xl">
        <span className={line1Light ? "font-light" : "font-bold"}>{line1}</span>
      </h2>
      <h2 className="font-['Manrope'] text-4xl font-bold text-black md:text-5xl">
        {line2}
      </h2>
    </div>
  );
}
