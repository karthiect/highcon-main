import { Link } from "react-router-dom";
import { normalizePath } from "../helpers/pathUtils";

interface IndustryButtonProps {
  children: React.ReactNode;
  className?: string;
  to?: string;
}

export function IndustryButton({
  children,
  className = "",
  to,
}: IndustryButtonProps) {
  const buttonClasses = `
    relative px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg 
    bg-white/10 border-2 border-white/30 
    shadow-lg hover:shadow-xl
    text-white font-['Poppins'] text-sm sm:text-base md:text-lg leading-tight sm:leading-[24px]
    hover:bg-white/20 hover:border-white/50 transition-all duration-200 ease-in-out
    backdrop-blur-md
    ${className}
  `;

  if (to) {
    return (
      <Link to={normalizePath(to)} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return <button className={buttonClasses}>{children}</button>;
}
