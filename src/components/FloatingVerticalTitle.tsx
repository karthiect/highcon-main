import { useState, useEffect } from "react";

interface FloatingVerticalTitleProps {
  title: string;
  subtitle?: string;
  variant?: "light" | "dark" | "auto";
}

export function FloatingVerticalTitle({
  title,
  subtitle,
  variant = "auto",
}: FloatingVerticalTitleProps) {
  const [isLightBackground, setIsLightBackground] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide in hero section (first ~70vh)
      const heroHeight = window.innerHeight * 0.7;
      setIsVisible(window.scrollY > heroHeight);

      if (variant === "auto") {
        // Sample the background color at the title position
        const titleElement = document.elementFromPoint(
          64,
          window.innerHeight / 2,
        );
        if (titleElement) {
          const bgColor = window.getComputedStyle(titleElement).backgroundColor;
          const rgb = bgColor.match(/\d+/g);
          if (rgb) {
            // Calculate luminance to determine if background is dark or light
            const r = parseInt(rgb[0]);
            const g = parseInt(rgb[1]);
            const b = parseInt(rgb[2]);
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            // If luminance >= 0.5, it's a light background
            setIsLightBackground(luminance >= 0.5);
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const getTextStyle = () => {
    if (variant === "light") {
      // Light variant (for dark backgrounds) - white text
      return {
        color: "rgba(2, 71, 86, 1)",
        textShadow:
          "2px 2px 8px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.1)",
        WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
      };
    } else if (variant === "dark") {
      // Dark variant (for light backgrounds) - dark text
      return {
        color: "transparent",
        textShadow: "none",
        // WebkitTextStroke: "1px rgba(0, 0, 0, 0.05)",
      };
    } else {
      // Auto mode: cyan for light backgrounds, dark grey for dark backgrounds
      return isLightBackground
        ? {
          // Light background → cyan text
          color: "rgba(2, 71, 86, 1)",
          textShadow:
            "2px 2px 8px rgba(0, 0, 0, 0.3), -1px -1px 2px rgba(255, 255, 255, 0.1)",
          WebkitTextStroke: "1px rgba(0, 139, 139, 0.3)",
        }
        : {
          // Dark background → original dark grey with white shadow
          color: "transparent",
          textShadow: "none",
          // WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
        };
    }
  };

  return (
    <div
      className={`pointer-events-none fixed top-1/2 left-8 z-40 hidden h-11/12 -translate-y-1/2 transition-opacity duration-500 lg:block ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="h-full flex flex-col items-center gap-2">
        {/* Main Title - Smaller */}
        <div
          className="h-full font-['Poppins'] tracking-[0.3em] transition-all duration-500 hover:opacity-80"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontSize: "1rem",
            fontWeight: "600",
            letterSpacing: "0.3em",
            textWrap: "wrap",
            textAlign: "center",
            ...getTextStyle(),
          }}
        >
          {title.toUpperCase()}
        </div>

        {subtitle && (
          <>
            {/* Separator */}
            <div
              className="h-4 w-0.5 transition-all duration-500"
              style={{
                backgroundColor: isLightBackground
                  ? "rgba(2, 71, 86, 0.5)"
                  : "rgba(255, 255, 255, 0.3)",
              }}
            />

            {/* Subtitle - Larger */}
            <div
              className="font-['Poppins'] tracking-[0.3em] transition-all duration-500 hover:opacity-80"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                fontSize: "1.5rem",
                fontWeight: "700",
                letterSpacing: "0.3em",
                ...getTextStyle(),
              }}
            >
              {subtitle.toUpperCase()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
