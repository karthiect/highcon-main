import type { JSX } from "react";
import { Link } from "react-router-dom";
import { normalizePath } from "../helpers/pathUtils";

interface DetailProductCardProps {
  image: string;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
  imageOverlay?: JSX.Element;
  buttonText?: string;
  buttonLink?: string;
  onButtonClick?: () => void;
  id?: string;
}

export function DetailProductCard({
  image,
  title,
  subtitle,
  description,
  badge,
  badgeColor = "#14525d",
  imageOverlay,
  buttonText = "View More",
  buttonLink,
  onButtonClick,
  id,
}: DetailProductCardProps) {
  return buttonLink ? (
    <Link
      id={id}
      className="flex h-full cursor-pointer scroll-mt-24 flex-col"
      to={normalizePath(buttonLink)}
    >
      {/* Product Image */}
      <div className="relative mb-6 aspect-3/2 w-full overflow-hidden rounded-3xl bg-gray-50">
        <img src={image} alt={title} className="h-full w-full object-cover mix-blend-multiply" />
        {imageOverlay ? imageOverlay : <></>}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        {/* Badge */}
        {badge && (
          <div className="mb-3 inline-block w-fit">
            <span
              className="rounded-xl px-4 py-1.5 font-['Manrope'] text-sm tracking-wider text-white uppercase"
              style={{ backgroundColor: badgeColor }}
            >
              {badge}
            </span>
          </div>
        )}

        <h3
          className={`${subtitle ? "mb-0" : "mb-4"} font-['Manrope'] text-[40px] font-bold tracking-[-0.5px] text-[#222222]`}
        >
          {title}
        </h3>
        {subtitle ? (
          <p className="mb-4 font-['Manrope'] text-lg text-gray-600 md:text-xl">
            {subtitle}
          </p>
        ) : (
          <></>
        )}
        {description ? (
          <p className="mb-6 line-clamp-3 font-['Manrope'] text-[20px] leading-7.5 font-light tracking-[-0.5px] text-[#222222]">
            {description}
          </p>
        ) : (
          <></>
        )}

        {/* View More Button */}
        <div className="mt-auto">
          <button className="inline-block w-fit cursor-pointer rounded-xl bg-black px-5 py-2">
            <span className="font-['Manrope'] tracking-[-0.5px] text-white">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </Link>
  ) : (
    <div
      id={id}
      className="flex h-full cursor-pointer scroll-mt-24 flex-col"
      onClick={onButtonClick}
    >
      {/* Product Image */}
      <div className="relative mb-6 aspect-3/2 w-full overflow-hidden rounded-3xl bg-gray-50">
        <img src={image} alt={title} className="h-full w-full object-contain mix-blend-multiply" />
        {imageOverlay ? imageOverlay : <></>}
      </div>

      {/* Product Info */}
      <div className="flex flex-1 flex-col">
        {/* Badge */}
        {badge && (
          <div className="mb-3 inline-block w-fit">
            <span
              className="rounded-xl px-4 py-1.5 font-['Manrope'] text-sm tracking-wider text-white uppercase"
              style={{ backgroundColor: badgeColor }}
            >
              {badge}
            </span>
          </div>
        )}

        <h3
          className={`${subtitle ? "mb-0" : "mb-4"} font-['Manrope'] text-[40px] font-bold tracking-[-0.5px] text-[#222222]`}
        >
          {title}
        </h3>
        {subtitle ? (
          <p className="mb-4 font-['Manrope'] text-lg text-gray-600 md:text-xl">
            {subtitle}
          </p>
        ) : (
          <></>
        )}
        {description ? (
          <p className="mb-6 line-clamp-3 font-['Manrope'] text-[20px] leading-7.5 font-light tracking-[-0.5px] text-[#222222]">
            {description}
          </p>
        ) : (
          <></>
        )}

        {/* View More Button */}
        <div className="mt-auto">
          <button className="inline-block w-fit cursor-pointer rounded-xl bg-black px-5 py-2">
            <span className="font-['Manrope'] tracking-[-0.5px] text-white">
              {buttonText}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
