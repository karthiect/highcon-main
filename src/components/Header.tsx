import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { paths } from "../constants/paths";
import { productButtons } from "../constants/productsData";
import { InputSwitch } from "primereact/inputswitch";
import Images from "../constants/images";
import { normalizePath } from "../helpers/pathUtils";

const toCapitalize = (str: string) => {
  return str
    .trim()
    .split(/\s+/)
    .map((word: string) => {
      if (word.length === 0) return "";
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

export function Header({
  hideIndustriesDropdown = false,
  textColor = "white",
}: {
  hideIndustriesDropdown?: boolean;
  textColor?: "white" | "black";
}) {
  const [isBulk, setIsBulk] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesDropdownOpen, setIsIndustriesDropdownOpen] =
    useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsIndustriesDropdownOpen(false);
      }
    }

    if (isIndustriesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isIndustriesDropdownOpen]);

  return (
    <header className="absolute top-0 right-0 left-0 z-50 bg-transparent">
      <div className="container mx-auto px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={normalizePath(paths?.home)}
            className="inline-block w-[15%] shrink-0 sm:w-[10%] lg:w-[8%]"
          >
            <img
              alt="HIGHCON"
              className="aspect-square w-full object-contain"
              src={Images?.Logo}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-4 lg:flex">
            <NavItem
              to={normalizePath(paths?.home)}
              active={normalizePath(location.pathname) === normalizePath(paths?.home)}
              textColor={textColor}
            >
              Home
            </NavItem>
            <NavItem
              to={normalizePath(paths?.about)}
              active={normalizePath(location.pathname) === normalizePath(paths?.about)}
              textColor={textColor}
            >
              About Us
            </NavItem>
            <NavItem
              to={normalizePath(paths?.services)}
              active={normalizePath(location.pathname) === normalizePath(paths?.services)}
              textColor={textColor}
            >
              Services
            </NavItem>
            {!hideIndustriesDropdown && (
              <div className="relative" ref={dropdownRef}>
                <NavItem
                  to="#"
                  hasDropdown
                  onClick={() =>
                    setIsIndustriesDropdownOpen(!isIndustriesDropdownOpen)
                  }
                  textColor={textColor}
                  isDropdownOpen={isIndustriesDropdownOpen}
                >
                  Industries
                </NavItem>
                {isIndustriesDropdownOpen ? (
                  <div className="absolute top-full left-0 z-50 mt-2 w-65 overflow-hidden rounded-lg bg-[#004856] shadow-lg">
                    <div className="grid grid-cols-1 gap-0">
                      <div className="border-r border-white/10">
                        <div className="bg-white/5 px-5 py-3">
                          <h3 className="inline-flex w-full items-center justify-between font-['Manrope'] text-xs tracking-wider text-white/60 uppercase">
                            <span>{isBulk ? "Bulk" : "Material"}</span>
                            <InputSwitch
                              checked={isBulk}
                              onChange={(e) => setIsBulk(e.value)}
                              className="scale-75"
                            />
                          </h3>
                        </div>
                        {productButtons?.map((pb) => (
                          <Link
                            key={pb.id}
                            to={normalizePath(`${isBulk ? paths?.bulk : paths?.material}${pb.to}`)}
                            className="block px-5 py-3 font-['Manrope'] text-[14px] leading-6 text-white transition-colors hover:bg-white/10"
                            onClick={() => setIsIndustriesDropdownOpen(false)}
                          >
                            {toCapitalize(pb.label?.toLowerCase())}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            )}
            <NavItem
              to={normalizePath(paths?.blog)}
              active={normalizePath(location.pathname) === normalizePath(paths?.blog)}
              textColor={textColor}
            >
              Blog
            </NavItem>
            <NavItem
              to={normalizePath(paths?.contact)}
              active={normalizePath(location.pathname) === normalizePath(paths?.contact)}
              textColor={textColor}
            >
              Contact Us
            </NavItem>
          </nav>

          {/* Mobile menu button */}
          <button
            className={`p-1.5 sm:p-2 lg:hidden ${isMobileMenuOpen ? "text-green-500" : textColor === "black" ? "text-black" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={20} className="sm:h-6 sm:w-6" />
            ) : (
              <Menu size={20} className="sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className={`fixed right-[5%] mt-4 max-h-[80%] w-[90%] overflow-x-hidden overflow-y-auto rounded-lg border-t bg-[#14525d] pb-4 lg:hidden ${textColor === "black" ? "border-black/20" : "border-white/20"}`}
          >
            <div className="flex flex-col space-y-2 pt-4">
              <MobileNavItem
                to={normalizePath(paths?.home)}
                active={normalizePath(location.pathname) === normalizePath(paths?.home)}
                onClick={() => setIsMobileMenuOpen(false)}
                textColor="white"
              >
                Home
              </MobileNavItem>
              <MobileNavItem
                to={normalizePath(paths?.about)}
                active={normalizePath(location.pathname) === normalizePath(paths?.about)}
                onClick={() => setIsMobileMenuOpen(false)}
                textColor="white"
              >
                About Us
              </MobileNavItem>
              <MobileNavItem
                to={normalizePath(paths?.services)}
                active={normalizePath(location.pathname) === normalizePath(paths?.services)}
                onClick={() => setIsMobileMenuOpen(false)}
                textColor="white"
              >
                Services
              </MobileNavItem>
              {!hideIndustriesDropdown && (
                <div>
                  <MobileNavItem
                    to="#"
                    hasDropdown
                    onClick={() =>
                      setIsMobileIndustriesOpen(!isMobileIndustriesOpen)
                    }
                    textColor="white"
                    isDropdownOpen={isMobileIndustriesOpen}
                  >
                    Industries
                  </MobileNavItem>
                  {isMobileIndustriesOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {/* Bulk Section */}
                      <div className="mb-3">
                        <div className="mb-2 px-4 py-1">
                          <h3 className="inline-flex w-full items-center justify-between font-['Manrope'] text-xs tracking-wider text-white/60 uppercase">
                            <span>{isBulk ? "Bulk" : "Material"}</span>
                            <InputSwitch
                              checked={isBulk}
                              onChange={(e) => setIsBulk(e.value)}
                              className="scale-75"
                            />
                          </h3>
                        </div>
                        {productButtons?.map((pb) => (
                          <Link
                            key={pb.id}
                            to={normalizePath(`${isBulk ? paths?.bulk : paths?.material}${pb.to}`)}
                            className="block px-5 py-3 font-['Manrope'] text-[14px] leading-6 text-white transition-colors hover:bg-white/10"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileIndustriesOpen(false);
                            }}
                          >
                            {toCapitalize(pb.label?.toLowerCase())}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
              <MobileNavItem
                to={normalizePath(paths?.blog)}
                active={normalizePath(location.pathname) === normalizePath(paths?.blog)}
                onClick={() => setIsMobileMenuOpen(false)}
                textColor="white"
              >
                Blog
              </MobileNavItem>
              <MobileNavItem
                to={normalizePath(paths?.contact)}
                active={normalizePath(location.pathname) === normalizePath(paths?.contact)}
                onClick={() => setIsMobileMenuOpen(false)}
                textColor="white"
              >
                Contact Us
              </MobileNavItem>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

function NavItem({
  children,
  to,
  active = false,
  hasDropdown = false,
  onClick,
  textColor = "white",
  isDropdownOpen = false,
}: {
  children: React.ReactNode;
  to: string;
  active?: boolean;
  hasDropdown?: boolean;
  onClick?: () => void;
  textColor?: "white" | "black";
  isDropdownOpen?: boolean;
}) {
  const content = (
    <>
      <span className="font-['Manrope'] text-[16px] leading-[27.2px]">
        {children}
      </span>
      {hasDropdown && (
        <ChevronDown
          size={12}
          className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? "rotate-0" : "rotate-180"}`}
        />
      )}
    </>
  );

  const className = `relative flex items-center px-6 py-3 transition-all duration-300 ${active
    ? "text-[#00d4ff]"
    : `${textColor === "white" ? "text-white" : "text-[#14525d]"} hover:text-[#00d4ff]`
    } font-medium cursor-pointer`;

  if (to.startsWith("#")) {
    return (
      <button onClick={onClick} className={className}>
        {content}
      </button>
    );
  }

  return (
    <Link to={normalizePath(to)} className={className} onClick={onClick}>
      {content}
    </Link>
  );
}

function MobileNavItem({
  children,
  to,
  active = false,
  hasDropdown = false,
  onClick,
  textColor = "white",
  isDropdownOpen = false,
}: {
  children: React.ReactNode;
  to: string;
  active?: boolean;
  hasDropdown?: boolean;
  onClick?: () => void;
  textColor?: "white" | "black";
  isDropdownOpen?: boolean;
}) {
  const content = (
    <>
      <span className="font-['Manrope'] text-[16px] leading-[27.2px]">
        {children}
      </span>
      {hasDropdown && (
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-0" : "rotate-180"}`}
        />
      )}
    </>
  );

  const className = `flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${active
    ? "bg-[#004856] border border-[#004856] text-white"
    : textColor === "black"
      ? "hover:bg-black/10 text-black"
      : "hover:bg-white/10 text-white"
    } font-medium`;

  if (to.startsWith("#")) {
    return (
      <button
        type="button"
        className={`${className} w-full text-left`}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return (
    <Link to={normalizePath(to)} className={className} onClick={onClick}>
      {content}
    </Link>
  );
}
