import { FloatingVerticalTitle } from "../components/FloatingVerticalTitle";
import { ScrollToTop } from "../components/ScrollToTop";
import { FloatingSemiCircleMenu } from "../components/FloatingSemiCircleMenu";
import { MapPin, Phone, Mail } from "lucide-react";
import Images from "../constants/images";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ContactForm from "../components/ContactForm";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


const Contact = () => {
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;
  return (
    <div className="relative w-full bg-white">

      {metaTitle ? (
        <h1 className="visually-hidden">
          {metaTitle}
        </h1>
      ) : null}
      <FloatingVerticalTitle title="Contact" />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      <HeroSection
        variant="seven"
        data={{
          image: {
            src: Images?.ContactHeroBg,
            alt: "Contact Us background",
          },
        }}
        HeroContent={() => (
          <>
            <div className="mx-auto mb-6 w-full max-w-10/12 sm:mb-8 lg:mb-12">
              <h2 className="mb-3 font-['Inter'] text-2xl font-black tracking-tight text-white sm:mb-4 sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
                Contact Us
              </h2>
              <p className="max-w-lg font-['Inter'] text-sm font-semibold text-white/50 sm:text-base">
                We strive to respond to all inquiries within 48 hours. Thank you
                for your patience and interest.
              </p>
            </div>
            <ContactForm />
            <div className="mx-auto grid w-full max-w-10/12 grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
              <a
                href="https://maps.app.goo.gl/VJeBbH6SJBUkc2RU8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-black/50 p-2.5 backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <MapPin className="h-5 w-5 text-white" />
                <p className="text-xs text-white">
                  6/475, KARUVALUR ROAD, Poonekoundanpuddur,
                  Masagoundenchettipalayam, Tamil Nadu 641107 »
                </p>
              </a>

              <a
                href="tel:+919790041419"
                className="flex items-center gap-2 rounded-xl bg-black/50 p-2.5 backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <Phone className="h-5 w-5 text-white" />
                <p className="text-xs text-white">+91 97900 41419 »</p>
              </a>

              <a
                href="mailto:info@highcon.in"
                className="flex items-center gap-2 rounded-xl bg-black/50 p-2.5 backdrop-blur-sm transition-colors hover:bg-black/60"
              >
                <Mail className="h-5 w-5 text-white" />
                <p className="text-xs text-white">info@highcon.in »</p>
              </a>
            </div>
          </>
        )}
      />
      <Footer />
    </div>
  );
};

export default Contact;
