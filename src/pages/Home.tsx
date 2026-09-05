import { useState } from "react";
import type { MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../constants/paths";
import Images from "../constants/images";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";

const Home = () => {
  const navigate = useNavigate();
  const [hoveredPanel, setHoveredPanel] = useState<"left" | "right" | null>(
    null,
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const metaTitle = metaData?.find(
    (m: any) => m?.slug === normalizePath(window.location.pathname),
  )?.meta_title;

  const handlePanelClick = (
    event: MouseEvent<HTMLAnchorElement>,
    panel: "left" | "right",
  ) => {
    event.preventDefault();
    setIsTransitioning(true);
    setTimeout(() => {
      if (panel === "left") {
        navigate(normalizePath(paths?.bulk));
      } else {
        navigate(normalizePath(paths?.material));
      }
    }, 300);
  };

  return (
    <>
      {/* Transition overlay */}
      <div
        className={`pointer-events-none fixed inset-0 z-50 bg-white transition-opacity duration-300 ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      />

      {metaTitle ? (
        <h1 className="visually-hidden" hidden>
          {metaTitle || "bulk material handling"}
        </h1>
      ) : null}

      <div className="relative h-screen w-full overflow-hidden bg-white">
        {/* Center Logo */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
          <img
            alt="Highcon Innovations International"
            className="h-auto w-32 opacity-50 sm:w-40 md:w-48 lg:w-56 xl:w-64"
            src={Images?.WhiteLogo}
          />
        </div>

        {/* Left Panel - Bulk Material Handling */}
        <Link
          to={normalizePath(paths?.bulk)}
          onClick={(event) => handlePanelClick(event, "left")}
          onMouseEnter={() => setHoveredPanel("left")}
          onMouseLeave={() => setHoveredPanel(null)}
          className="absolute top-0 left-0 h-1/2 w-full cursor-pointer outline-none md:h-full md:w-1/2"
        >
          <div className="relative h-full w-full overflow-hidden">
            {/* Background Image with overlay */}
            <div className="absolute inset-0">
              <img
                alt="Bulk Material Handling"
                className="absolute h-full w-full object-cover object-center"
                src={Images?.LandingBulkBg}
              />
              <div
                className={`absolute inset-0 bg-[rgba(0,72,86,0.4)] transition-all duration-200 ${
                  hoveredPanel === "left" ? "brightness-125" : ""
                }`}
              />
            </div>

            {/* Title Text - Responsive positioning */}
            <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-8 md:bottom-16 md:left-12 lg:bottom-25 lg:left-12.5">
              <p className="text-left font-['Manrope'] text-3xl leading-tight font-light tracking-[-0.5px] text-white capitalize sm:text-4xl sm:leading-[1.1] md:text-5xl md:leading-[1.1] lg:text-7xl lg:leading-22.5 xl:text-[100px]">
                bulk material
                <br />
                handling
              </p>
            </div>
          </div>
        </Link>

        {/* Right Panel - Material Handling */}
        <Link
          to={normalizePath(paths?.material)}
          onClick={(event) => handlePanelClick(event, "right")}
          onMouseEnter={() => setHoveredPanel("right")}
          onMouseLeave={() => setHoveredPanel(null)}
          className="absolute right-0 bottom-0 h-1/2 w-full cursor-pointer outline-none md:top-0 md:h-full md:w-1/2"
        >
          <div className="relative h-full w-full overflow-hidden">
            {/* Background Image with overlay */}
            <div className="absolute inset-0">
              <img
                alt="Material Handling"
                className="absolute h-full w-full object-cover object-center"
                src={Images?.LandingMaterialBg}
              />
              <div
                className={`absolute inset-0 bg-[rgba(0,72,86,0.4)] transition-all duration-200 ${
                  hoveredPanel === "right" ? "brightness-125" : ""
                }`}
              />
            </div>

            {/* Title Text - Responsive positioning */}
            <div className="absolute bottom-8 left-4 sm:bottom-12 sm:left-8 md:bottom-16 md:left-12 lg:bottom-25 lg:left-12.5">
              <p className="text-left font-['Manrope'] text-3xl leading-tight font-light tracking-[-0.5px] text-white capitalize sm:text-4xl sm:leading-[1.1] md:text-5xl md:leading-[1.1] lg:text-7xl lg:leading-22.5 xl:text-[100px]">
                material
                <br />
                handling
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
