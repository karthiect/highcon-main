import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { primaryMenuItems } from "../constants/menuItems";
import { productButtons } from "../constants/productsData";
import { paths } from "../constants/paths";
import { normalizePath } from "../helpers/pathUtils";

export function FloatingSemiCircleMenu({
  isBulk = false,
}: {
  isBulk?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const menuItems = primaryMenuItems;
  const industriesSubmenu = productButtons?.map((p) => ({
    ...p,
    to: normalizePath(`${isBulk ? paths?.bulk : paths?.material}${p?.to || ""}`),
  }));

  // Handle scroll to hide menu in hero and footer sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hide in hero section (first 70vh approximately)
      const heroThreshold = windowHeight * 0.7;

      // Hide in footer section - adjust to show menu until slightly above footer
      // Reduced threshold from 500px to 150px so menu stays visible longer
      const footerThreshold = documentHeight - windowHeight - 150;

      // Show menu only in middle sections
      if (scrollY > heroThreshold && scrollY < footerThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Close menu when hiding
        setShowIndustries(false);
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate position for perfect semi-circle layout with equal angular spacing
  const getMenuItemPosition = (index: number, total: number) => {
    const radius = 200; // Increased radius for better spacing
    const startAngle = 90; // Adjusted start angle for better top spacing
    const endAngle = 270; // Adjusted end angle for better bottom spacing
    const totalAngle = endAngle - startAngle;

    // Equal angular distribution
    const angleStep = totalAngle / (total - 1);
    const angle = (startAngle + angleStep * index) * (Math.PI / 180);

    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    return { x, y };
  };

  const handleIndustriesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowIndustries(!showIndustries);
  };

  return (
    <>
      {/* Floating Action Button (FAB) - Positioned with safe margin from right edge */}
      {isVisible && (
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowIndustries(false);
          }}
          className="fixed top-1/2 right-12 z-100 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#222222] text-white shadow-[0px_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:scale-105 hover:bg-[#14525d] hover:shadow-[0px_12px_32px_rgba(0,0,0,0.35)]"
          aria-label="Toggle menu"
          style={{
            opacity: isVisible ? 1 : 0,
            pointerEvents: isVisible ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      )}

      {/* Semi-Circle Menu Items */}
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 z-90 bg-black/20 backdrop-blur-[2px]"
            onClick={() => {
              setIsOpen(false);
              setShowIndustries(false);
            }}
          />

          {/* Menu Items Container - Anchored to FAB center with left offset for safety */}
          <div className="pointer-events-none fixed top-1/2 right-12 z-95 -translate-y-1/2">
            {[...menuItems].reverse().map((item, index) => {
              const { x, y } = getMenuItemPosition(index, menuItems.length);
              const isIndustries = item.hasDropdown;

              return (
                <div
                  key={item.title}
                  className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    opacity: isOpen ? 1 : 0,
                    scale: isOpen ? 1 : 0.8,
                    transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)`,
                    transitionDelay: `${index * 60}ms`,
                  }}
                >
                  {isIndustries ? (
                    <button
                      onClick={handleIndustriesClick}
                      className="group flex min-h-11 items-center gap-2 rounded-full bg-white px-6 py-3 font-['Manrope'] whitespace-nowrap text-[#222222] shadow-[0px_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-[#14525d] hover:text-white hover:shadow-[0px_6px_20px_rgba(20,82,93,0.3)]"
                    >
                      {item.title}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${showIndustries ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={normalizePath(item.to || "")}
                      className="block min-h-11 items-center justify-center rounded-full bg-white px-6 py-3 font-['Manrope'] whitespace-nowrap text-[#222222] shadow-[0px_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-[#14525d] hover:text-white hover:shadow-[0px_6px_20px_rgba(20,82,93,0.3)]"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Industries Dropdown - Positioned inside the arc */}
            {showIndustries && (
              <div
                className="pointer-events-auto absolute"
                style={{
                  left: "-280px",
                  top: "0",
                  transform: "translateY(-50%)",
                  opacity: showIndustries ? 1 : 0,
                  transition: "all 0.3s ease",
                }}
              >
                <div className="min-w-50 rounded-2xl border border-gray-100 bg-white p-2 shadow-[0px_8px_24px_rgba(0,0,0,0.2)]">
                  {industriesSubmenu.map((subItem, subIndex) => (
                    <Link
                      key={subItem.label}
                      to={subItem.to}
                      className="block rounded-[10px] px-5 py-2.5 font-['Manrope'] text-[#222222] transition-all duration-200 hover:bg-[#14525d] hover:text-white"
                      style={{
                        opacity: 0,
                        animation: `slideInFade 0.25s ease forwards ${subIndex * 60}ms`,
                      }}
                      onClick={() => {
                        setIsOpen(false);
                        setShowIndustries(false);
                      }}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      <style>{`
        @keyframes slideInFade {
          from {
            opacity: 0;
            transform: translateX(-8px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .fixed.right-12 {
            right: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .fixed.right-12 {
            right: 1.5rem;
          }
        }
        
        @media (max-width: 640px) {
          .fixed.right-12 {
            right: 1rem;
          }
        }
      `}</style>
    </>
  );
}
