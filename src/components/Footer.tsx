import { Link, useLocation } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight, Loader2 } from "lucide-react";
import ECSLogo from "../assets/images/webp/ecs-logo.webp";
import { paths } from "../constants/paths";
import { normalizePath } from "../helpers/pathUtils";
import { useState } from "react";
import buildMailtoUrl from "../helpers/buildMailtoUrl";
import { toast } from "sonner";

interface FooterProps {
  isBulk?: boolean; // optional
}

export function Footer({ isBulk = true }: FooterProps) {
  const location = useLocation();
  const [newsLetterEmail, setNewsLetterEmail] = useState("");
  const [isSendingMail, setIsSendingMail] = useState(false);


  const handleSubmit = (email: string) => {
    const trimmedEmail = email.trim();

    if (trimmedEmail.length < 1) {
      toast("❌ Kindly fill in the email field.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      toast("❌ Kindly enter a valid email address.");
      return;
    }
    setIsSendingMail(true);
    setNewsLetterEmail(trimmedEmail);
    window.location.href = buildMailtoUrl({
      to: import.meta.env?.VITE_SENDER_EMAIL ?? "",
      subject: "Newsletter subscription request",
      body: `Please subscribe this email address to the newsletter:\n\n${trimmedEmail}`,
    });
    setIsSendingMail(false);
  };

  return (
    <div className="relative w-full bg-black px-3 py-4 sm:px-4 sm:py-6 md:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Main Content Grid */}
        <div className="mb-4 grid grid-cols-1 gap-4 sm:mb-6 sm:gap-6 lg:grid-cols-2">
          {/* Left Section */}
          <div className="space-y-2.5 sm:space-y-3">
            {/* Heading */}
            <h2 className="font-['Manrope'] text-xl text-white sm:text-2xl md:text-3xl">
              Ready to work with us?
            </h2>

            {/* Subtitle */}
            <p className="font-['Manrope'] text-xs text-white sm:text-sm">
              Join us to experience cutting-edge industrial solutions that drive
              innovation, lasting success.
            </p>

            {/* Email Input */}
            <div className="relative max-w-sm">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full rounded-full border border-white bg-transparent px-3 py-1.5 font-['Manrope'] text-xs text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none sm:px-4 sm:py-2 sm:text-sm"
                value={newsLetterEmail}
                onChange={(e) => setNewsLetterEmail(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-1/2 right-0.5 -translate-y-1/2 cursor-pointer rounded-full bg-white p-1.5 transition-colors hover:bg-white/90 sm:right-1 sm:p-2"
                onClick={() => handleSubmit(newsLetterEmail)}
                disabled={isSendingMail}
              >
                {isSendingMail ? (
                  <Loader2 className="h-3 w-3 animate-spin text-black sm:h-4 sm:w-4" />
                ) : (
                  <ArrowRight className="h-3 w-3 text-black sm:h-4 sm:w-4" />
                )}
              </button>
            </div>

            {/* Contact Info */}
            <div className="space-y-1.5 pt-2 sm:space-y-2">
              <a
                href="https://maps.app.goo.gl/VzvGey8RkqqoMbpR8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-opacity hover:opacity-80 sm:gap-2"
              >
                <MapPin className="h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4" />
                <span className="font-['Manrope'] text-xs text-white sm:text-sm">
                  6/475, KARUVALUR ROAD, Poonekoundanpuddur,
                  Masagoundenchettipalayam, Tamil Nadu 641107.
                </span>
              </a>
              <a
                href="tel:+919790041419"
                className="flex items-center gap-1.5 transition-opacity hover:opacity-80 sm:gap-2"
              >
                <Phone className="h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4" />
                <span className="font-['Manrope'] text-xs text-white sm:text-sm">
                  +91 97900 41419
                </span>
              </a>
              <a
                href="mailto:info@highcon.in"
                className="flex items-center gap-1.5 transition-opacity hover:opacity-80 sm:gap-2"
              >
                <Mail className="h-3 w-3 shrink-0 text-white sm:h-4 sm:w-4" />
                <span className="font-['Manrope'] text-xs text-white sm:text-sm">
                  info@highcon.in
                </span>
              </a>
            </div>
          </div>

          {/* Right Section - Navigation */}
          <div className="flex justify-start lg:justify-end">
            <nav className="space-y-1 text-left lg:text-right text-xs sm:space-y-1.5 sm:text-sm">
              <Link
                to={normalizePath("/")}
                className={`block font-['Manrope'] transition-all duration-300 ${normalizePath(location.pathname) === normalizePath("/")
                  ? "scale-105 text-cyan-400"
                  : "text-white hover:text-cyan-400"
                  }`}
              >
                Home
              </Link>
              <Link
                to={normalizePath(paths.blog)}
                className={`block font-['Manrope'] transition-all duration-300 ${normalizePath(location.pathname).startsWith("/blog/")
                  ? "scale-105 text-cyan-400"
                  : "text-white hover:text-cyan-400"
                  }`}
              >
                Blog
              </Link>
              <Link
                to={normalizePath(paths.about)}
                className={`block font-['Manrope'] transition-all duration-300 ${normalizePath(location.pathname) === normalizePath(paths.about)
                  ? "scale-105 text-cyan-400"
                  : "text-white hover:text-cyan-400"
                  }`}
              >
                About Us
              </Link>
              <Link
                to={normalizePath(paths.services)}
                className={`block font-['Manrope'] transition-all duration-300 ${normalizePath(location.pathname) === normalizePath(paths.services)
                  ? "scale-105 text-cyan-400"
                  : "text-white hover:text-cyan-400"
                  }`}
              >
                Services
              </Link>
              <Link
                to={normalizePath(isBulk === false ? paths.material : paths.bulk)}
                className="block font-['Manrope'] text-white hover:text-cyan-400"
              >
                Industries
              </Link>
              <Link
                to={normalizePath(paths.contact)}
                className={`block font-['Manrope'] transition-all duration-300 ${normalizePath(location.pathname) === normalizePath(paths.contact)
                  ? "scale-105 text-cyan-400"
                  : "text-white hover:text-cyan-400"
                  }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30">
          <div className="flex flex-col items-center justify-between gap-1.5 pt-2 sm:flex-row sm:items-center sm:gap-2 sm:pt-3">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <p className="text-start font-['Manrope'] text-[10px] tracking-wide text-white sm:text-xs sm:tracking-wider">
                Copyright © 2025 Highcon Innovations International
              </p>
              {/* <p className="hidden font-['Manrope'] text-[10px] tracking-wide text-white sm:inline-block sm:text-xs sm:tracking-wide">
                {" "}
                |{" "}
              </p> */}
              {/* <p className="font-['Manrope'] text-[10px] tracking-wide text-white sm:text-xs sm:tracking-wider">
                Terms & Conditons
              </p> */}
            </div>

            <div className="flex items-center gap-2">
              <span className="font-['Manrope'] text-[10px] tracking-wide text-white sm:text-xs sm:tracking-wider">
                Powered By
              </span>
              <a
                href={paths?.poweredByECS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={ECSLogo}
                  alt="ECS Logo"
                  className="h-6 w-auto sm:h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
