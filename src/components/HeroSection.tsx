import { motion } from "motion/react";
import { Header } from "./Header";
import { ChevronDown } from "lucide-react";
import type { ElementType } from "react";
import DecodeEntities from "./DecodeEntities";

interface HeroSectionPropsType {
  data: {
    image: { src: string; alt: string };
    title?: string;
    subtitle?: string;
    description?: string;
  };
  variant?: "one" | "two" | "three" | "four" | "five" | "six" | "seven";
  overlayColor?: string;
  contentAlignment?: "start" | "center" | "end";
  badge?: string;
  badgeColor?: string;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  showScrollButton?: boolean;
  onScrollClick?: () => void;
  HeroContent?: ElementType;
}

const HeroSection = ({
  data,
  variant = "one",
  overlayColor = "bg-black/40",
  contentAlignment = "center",
  badge = undefined,
  badgeColor = "#14525d",
  breadcrumbs,
  showScrollButton,
  onScrollClick,
  HeroContent,
}: HeroSectionPropsType) => {
  const { image, title, subtitle, description } = data;
  const { src, alt } = image;
  return (
    <section
      className="relative h-[50vh] min-h-fit overflow-hidden bg-cover bg-center bg-no-repeat md:h-[80vh]"
      style={{
        backgroundImage: `url(${src})`,
      }}
      data-bg-alt={alt}
    >
      <div className={`absolute inset-0 z-5 ${overlayColor}`} />

      <Header />

      <div
        className={`relative z-10 flex h-[50vh] min-h-fit flex-row flex-wrap items-${contentAlignment} justify-start md:h-[80vh] ${contentAlignment === "end" ? "ps-4 pe-2 pt-25 pb-2 md:ps-6 md:pe-4 md:pt-50 md:pb-4 lg:ps-8 lg:pe-6 lg:pb-6" : "px-4 py-25 md:px-6 md:py-50 lg:px-8"}`}
      >
        {/* Hero Content */}
        {(variant === "one" && (
          <div className="mx-auto w-full max-w-10/12 text-center">
            <div className="mb-6 rounded-[20px] border border-white bg-white/20 p-4 backdrop-blur-[6.8px] sm:mb-8 sm:rounded-[31px] sm:p-6 md:p-8 lg:p-12 xl:p-16">
              {/* Badge */}
              {badge ? (
                <div className="mb-4 inline-block">
                  <span
                    className="rounded-xl px-4 py-1.5 font-['Manrope'] text-sm tracking-wider text-white uppercase"
                    style={{ backgroundColor: badgeColor }}
                  >
                    {badge}
                  </span>
                </div>
              ) : (
                <></>
              )}
              <h2 className="font-['Poppins'] text-2xl leading-tight font-black text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                <DecodeEntities str={title ?? ""} />
              </h2>
            </div>
            {description ? (
              <p className="mx-auto max-w-4xl px-2 font-['Poppins'] text-base leading-relaxed text-white sm:px-0 sm:text-lg md:text-xl lg:text-2xl">
                {description}
              </p>
            ) : (
              <></>
            )}
          </div>
        )) ||
          (variant === "two" && (
            <div className="w-full pt-25 md:pt-50">
              {/* Badge */}
              {badge ? (
                <div className="mb-4 inline-block">
                  <span
                    className="rounded-full px-4 py-1.5 font-['Manrope'] text-sm tracking-wider text-white uppercase"
                    style={{ backgroundColor: badgeColor }}
                  >
                    {badge}
                  </span>
                </div>
              ) : (
                <></>
              )}
              <h2 className="mb-0 font-['Poppins'] text-2xl leading-tight font-black text-[#14525d] uppercase [text-shadow:3px_3px_10px_#ffffff50] md:text-3xl lg:text-4xl xl:text-5xl">
                <DecodeEntities str={title ?? ""} />
              </h2>
              {description ? (
                <p className="font-['Poppins'] text-lg text-white md:text-xl lg:text-2xl xl:text-3xl">
                  {description}
                </p>
              ) : (
                <></>
              )}
            </div>
          )) ||
          (variant === "three" && (
            <div className="mx-auto w-full max-w-10/12 text-center">
              {/* Badge */}
              {badge ? (
                <div className="mb-4 inline-block">
                  <span
                    className="rounded-full px-4 py-1.5 font-['Manrope'] text-sm tracking-wider text-white uppercase"
                    style={{ backgroundColor: badgeColor }}
                  >
                    {badge}
                  </span>
                </div>
              ) : (
                <></>
              )}
              <h2 className="mb-0 font-['Poppins'] text-2xl leading-tight font-black text-white uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                <DecodeEntities str={title ?? ""} />
              </h2>
              {subtitle ? (
                <p className="font-['Poppins'] text-lg text-white md:text-xl lg:text-2xl xl:text-3xl">
                  {subtitle}
                </p>
              ) : (
                <></>
              )}
            </div>
          )) ||
          (variant === "four" && (
            <div className="w-full pt-25 md:pt-50">
              <h2 className="mb-0 font-['Poppins'] text-2xl leading-tight font-black text-[#14525d] uppercase [text-shadow:3px_3px_10px_#ffffff50] md:text-3xl lg:text-4xl xl:text-5xl">
                <DecodeEntities str={title ?? ""} />
              </h2>
              {subtitle ? (
                <p className="font-['Poppins'] text-lg text-white md:text-xl lg:text-2xl xl:text-3xl">
                  {subtitle}
                </p>
              ) : (
                <></>
              )}
            </div>
          )) ||
          (variant === "five" && (
            <div className="mx-auto w-full max-w-10/12 text-center">
              {/* Badge */}
              {badge ? (
                <div className="mb-4 inline-block">
                  <span
                    className="rounded-full px-4 py-1.5 font-['Manrope'] text-sm tracking-wider text-white uppercase"
                    style={{ backgroundColor: badgeColor }}
                  >
                    {badge}
                  </span>
                </div>
              ) : (
                <></>
              )}
              <h2 className="mb-4 font-['Poppins'] text-3xl leading-tight text-white md:text-4xl lg:text-5xl xl:text-6xl">
                <DecodeEntities str={title ?? ""} />
              </h2>
            </div>
          )) ||
          (variant === "six" && (
            <div className="mx-auto w-full max-w-10/12 text-center">
              <div className="mb-6 rounded-[20px] border border-white bg-white/20 p-4 backdrop-blur-[6.8px] sm:mb-8 sm:rounded-[31px] sm:p-6 md:p-8 lg:p-12 xl:p-16">
                {/* Badge */}
                {badge ? (
                  <div className="mb-4 inline-block">
                    <span
                      className="rounded-xl px-4 py-1.5 font-['Manrope'] text-sm tracking-wider text-white uppercase"
                      style={{ backgroundColor: badgeColor }}
                    >
                      {badge}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
                <h2 className="font-['Poppins'] text-2xl leading-tight font-black text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <DecodeEntities str={title ?? ""} />
                </h2>
                {subtitle ? (
                  <p className="font-['Poppins'] text-lg text-white md:text-xl lg:text-2xl xl:text-3xl">
                    {subtitle}
                  </p>
                ) : (
                  <></>
                )}
              </div>
              {description ? (
                <p className="mx-auto max-w-4xl px-2 font-['Poppins'] text-base leading-relaxed text-white sm:px-0 sm:text-lg md:text-xl lg:text-2xl">
                  {description}
                </p>
              ) : (
                <></>
              )}
              {/* Breadcrumbs below hero content */}
              {breadcrumbs && breadcrumbs.length > 0 && (
                <div className="mx-auto mt-6 w-full max-w-5xl">
                  <div className="flex items-center justify-center gap-2 text-sm text-white">
                    {breadcrumbs.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-['Manrope'] hover:underline"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span className="font-['Manrope']">{item.label}</span>
                        )}
                        {index < breadcrumbs.length - 1 && <span>/</span>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Animated Scroll Down Button */}
              {showScrollButton && onScrollClick && (
                <motion.button
                  onClick={onScrollClick}
                  className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 transform cursor-pointer flex-col items-center gap-2"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <span className="font-['Manrope'] text-sm tracking-wide text-white opacity-90 transition-opacity group-hover:opacity-100">
                    Explore Products
                  </span>
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/10 backdrop-blur-sm transition-colors group-hover:bg-white/20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronDown className="text-white" size={24} />
                  </motion.div>
                </motion.button>
              )}
            </div>
          )) ||
          (variant === "seven" && (HeroContent ? <HeroContent /> : <></>)) || (
            <></>
          )}
      </div>
    </section>
  );
};

export default HeroSection;
