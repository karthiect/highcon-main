import { useState, useRef, useEffect } from "react";
import { ScrollToTop } from "../components/ScrollToTop";
import { FloatingVerticalTitle } from "../components/FloatingVerticalTitle";
import { FloatingSemiCircleMenu } from "../components/FloatingSemiCircleMenu";
// import { YouTubeVideoPlayer } from "../components/YouTubeVideoPlayer";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Images from "../constants/images";
import { testimonials } from "../constants/testimonial";
import { processSteps } from "../constants/processSteps";
import { clients } from "../constants/clients";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


const Services = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<Set<number>>(new Set());
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;
  // const [activeVideo, setActiveVideo] = useState<
  //   "consulting" | "design" | "customization" | null
  // >(null);
  // const [showVideoCover, setShowVideoCover] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const resizeVideo = () => {
      if (!sectionRef.current || !iframeRef.current) return;

      const sectionWidth = sectionRef.current.offsetWidth;
      const sectionHeight = sectionRef.current.offsetHeight;
      const videoAspectRatio = 16 / 9;
      const sectionAspectRatio = sectionWidth / sectionHeight;

      let newWidth, newHeight;

      if (sectionAspectRatio > videoAspectRatio) {
        // Section is wider than video aspect ratio
        newWidth = sectionWidth;
        newHeight = sectionWidth / videoAspectRatio;
      } else {
        // Section is taller than video aspect ratio
        newHeight = sectionHeight;
        newWidth = sectionHeight * videoAspectRatio;
      }

      iframeRef.current.style.width = `${newWidth}px`;
      iframeRef.current.style.height = `${newHeight}px`;
    };

    resizeVideo();
    window.addEventListener("resize", resizeVideo);

    return () => window.removeEventListener("resize", resizeVideo);
  }, []);

  // Show video after it has had time to load and start playing
  // useEffect(() => {
  // const timer = setTimeout(() => {
  //   setShowVideoCover(false);
  // }, 4000);
  // Show video after 4 seconds

  //   return () => clearTimeout(timer);
  // }, []);

  const toggleExpanded = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedSteps((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];
  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title="Services" />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      {/* Hero Section */}
      <HeroSection
        variant="one"
        data={{
          image: {
            src: Images?.ServicesHeroBg,
            alt: "Industrial facility",
          },
          title: "Precision Services\nEngineered for Performance",
          description:
            "With 20+ years of expertise, Highcon Innovation International delivers world-class conveyor and aerospace components from its advanced Coimbatore facility — where technology meets trust, and performance drives progress.",
        }}
      />

      {/* What We Do Section */}
      {/* <section ref={sectionRef} className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
          <iframe
            ref={iframeRef}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${showVideoCover ? "opacity-0" : "opacity-100"}`}
            src="https://www.youtube.com/embed/gnzO8tRfyQA?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=gnzO8tRfyQA&fs=0&disablekb=1&playsinline=1&enablejsapi=1&start=17"
            title="Innovative Factory and Industry Solutions Background"
            frameBorder="0"
          />
        </div>

        <div className="absolute inset-0 z-1 bg-black/60" />

        <div className="relative min-h-199.25 lg:min-h-199.25">
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:px-8 sm:py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
            <div className="mb-8 sm:mb-10 md:mb-12">
              <p className="mb-4 font-['Manrope'] text-xs font-bold tracking-[2.8px] text-white sm:mb-6 sm:text-sm md:mb-8">
                WHAT WE DO
              </p>
              <h2 className="max-w-147 font-['Manrope'] text-2xl leading-tight tracking-[-0.5px] text-white sm:text-3xl sm:leading-11.25 md:text-4xl md:leading-12.75">
                <span className="font-light">
                  Innovative factory and industry
                </span>
                <br />
                <span className="font-bold">solutions today</span>
              </h2>
            </div>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:mb-0 lg:grid-cols-3">
              <div
                className="relative h-45 cursor-pointer overflow-hidden rounded-tl-[30px] transition-all sm:h-50 sm:rounded-tl-[40px] md:h-54 md:rounded-tl-[50px]"
                onClick={() => setActiveVideo("consulting")}
              >
                {activeVideo === "consulting" && (
                  <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-md">
                    <div className="m-4 h-full max-h-[90vh] w-full max-w-7xl">
                      <YouTubeVideoPlayer
                        videoId="JIN6KC3glto"
                        onClose={() => setActiveVideo(null)}
                      />
                    </div>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-tl-[50px] opacity-50 transition-opacity hover:opacity-70">
                  <img
                    alt="Consulting"
                    className="absolute top-[-37.12%] left-[-44.71%] h-[142.87%] w-[193.86%] max-w-none"
                    src={Images?.ServicesConsulting}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3 className="text-center font-['Manrope'] text-[22px] font-bold tracking-[-0.5px] text-white sm:text-[26px] md:text-[28px] lg:text-[32px]">
                    CONSULTING
                  </h3>
                </div>
              </div>

              <div
                className="relative h-45 cursor-pointer overflow-hidden transition-all sm:h-50 md:h-54"
                onClick={() => setActiveVideo("design")}
              >
                {activeVideo === "design" && (
                  <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-md">
                    <div className="m-4 h-full max-h-[90vh] w-full max-w-7xl">
                      <YouTubeVideoPlayer
                        videoId="gnzO8tRfyQA"
                        onClose={() => setActiveVideo(null)}
                      />
                    </div>
                  </div>
                )}
                <img
                  alt="Design"
                  className="object-50%-50% pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-50 transition-opacity hover:opacity-70"
                  src={Images?.ServicesDesign}
                />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3 className="text-center font-['Manrope'] text-[22px] font-bold tracking-[-0.5px] text-white sm:text-[26px] md:text-[28px] lg:text-[32px]">
                    DESIGN
                  </h3>
                </div>
              </div>

              <div
                className="relative h-45 cursor-pointer overflow-hidden transition-all sm:h-50 md:h-54"
                onClick={() => setActiveVideo("customization")}
              >
                {activeVideo === "customization" && (
                  <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/80 backdrop-blur-md">
                    <div className="m-4 h-full max-h-[90vh] w-full max-w-7xl">
                      <YouTubeVideoPlayer
                        videoId="0DAIobBe9V4"
                        onClose={() => setActiveVideo(null)}
                      />
                    </div>
                  </div>
                )}
                <img
                  alt="Customization"
                  className="object-50%-50% pointer-events-none absolute inset-0 size-full max-w-none object-cover opacity-50 transition-opacity hover:opacity-70"
                  src={Images?.ServicesCustomization}
                />
                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <h3 className="text-center font-['Manrope'] text-[22px] font-bold tracking-[-0.5px] text-white sm:text-[26px] md:text-[28px] lg:text-[32px]">
                    CUSTOMIZATION
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Our Process Section */}
      <section className="bg-white px-2 py-12 md:px-4 md:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-10/12 rounded-tl-[20px] rounded-tr-[20px] bg-black p-4 sm:rounded-tl-[30px] sm:rounded-tr-[30px] md:p-6 lg:rounded-tl-[50px] lg:rounded-tr-[50px] lg:p-8">
          <p className="mb-4 text-center text-sm tracking-[2.8px] text-white">
            OUR PROCESS
          </p>

          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              {metaTitle ? (
                <h1 className="visually-hidden">
                  {metaTitle}
                </h1>
              ) : null}
              <h2 className="mb-4 text-3xl text-white md:text-4xl lg:text-5xl">
                Streamlined processes <span className="font-bold">for</span>
                <br />
                <span className="font-bold">optimal efficiency</span>
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-base text-white md:text-lg">
                Our process is designed to maximize efficiency and quality at
                every stage of production. By integrating advanced technologies
                and best practices, we ensure seamless workflows.
              </p>
            </div>
          </div>

          {/* Process Steps and Image */}
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
            {/* Mobile: Three Separate Images */}
            <div className="space-y-4 sm:space-y-6 lg:hidden">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative aspect-square cursor-pointer overflow-hidden rounded-[40px] lg:aspect-auto lg:h-50"
                  onClick={() => {
                    // Toggle overlay for this specific image
                    if (activeStep === index) {
                      setActiveStep(null);
                    } else {
                      setActiveStep(index);
                    }
                  }}
                >
                  <img
                    alt={step.title}
                    className="h-full w-full object-cover transition-all duration-500"
                    src={step.image}
                  />
                  {/* Text Overlay */}
                  {activeStep === index && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-black/70 px-6 py-4 backdrop-blur-sm transition-all duration-300 sm:px-8 sm:py-6">
                      <div
                        className={`w-full text-center text-white ${expandedSteps.has(index) ? "max-h-full overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" : ""}`}
                      >
                        <span className="mb-1 block text-3xl font-bold sm:mb-2 sm:text-4xl">
                          {step.number}
                        </span>
                        <h3
                          className={`mb-1 px-2 text-xl font-semibold sm:mb-2 sm:text-2xl ${expandedSteps.has(index) ? "" : "truncate"}`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`mb-2 px-2 text-sm opacity-90 sm:text-base ${expandedSteps.has(index) ? "" : "line-clamp-2 sm:line-clamp-3"}`}
                        >
                          {step.description}
                        </p>
                      </div>
                      <button
                        onClick={(e) => toggleExpanded(index, e)}
                        className="mt-1 shrink-0 text-xs text-white underline transition-colors hover:text-cyan-400 sm:text-sm"
                      >
                        {expandedSteps.has(index) ? "Show Less" : "Read More"}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop: Single Changing Image */}
            <div className="relative hidden h-222 overflow-hidden rounded-[50px] lg:block">
              <img
                alt="Our Process"
                className="h-full w-full object-cover transition-all duration-500"
                src={
                  activeStep !== null
                    ? processSteps[activeStep].image
                    : processSteps[0].image
                }
              />
            </div>

            {/* Steps */}
            <div
              className="hidden space-y-6 lg:block"
              onMouseLeave={() => setActiveStep(null)}
            >
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className={`cursor-pointer rounded-[40px] bg-black p-6 text-white transition-all duration-300 hover:bg-white hover:text-black md:p-8 ${index === 1 ? "rounded-tl-[40px] rounded-bl-[40px]" : ""
                    }`}
                  onMouseEnter={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl font-bold md:text-5xl">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="mb-2 text-xl font-semibold md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="text-base opacity-80">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-black px-2 py-0 md:px-4 md:py-20 lg:px-8 lg:py-0">
        <div className="mx-auto max-w-10/12 rounded-br-[50px] rounded-bl-[50px] bg-white p-8 md:p-12 lg:p-16">
          <p className="mb-4 text-sm tracking-[2.8px] text-[#004856]">
            OUR CLIENT SAY
          </p>
          <h2 className="mb-12 text-3xl text-[#222222] md:text-4xl lg:text-5xl">
            What our satisfied clients
            <br />
            <span className="font-bold">are saying</span>
          </h2>

          {/* Testimonial Image Carousel */}
          <div
            className="scrollbar-hide mb-8 overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="flex min-w-full gap-6">
              {currentTestimonial?.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square w-[80%] shrink-0 overflow-hidden rounded-[40px] sm:w-[45%] md:w-[30%] lg:w-[22%]"
                >
                  <img
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    src={image.src}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="mx-auto">
            <div className="mb-4 flex gap-1">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <Star
                  key={index}
                  className="text-[#004856]"
                  size={20}
                  fill="#004856"
                />
              ))}
            </div>

            <p className="mb-8 text-lg leading-relaxed text-[#81848a] md:text-xl">
              "{currentTestimonial.quote}"
            </p>

            <div className="mb-8 flex items-center gap-4">
              <div className="h-15 w-15 overflow-hidden rounded-[10px]">
                <img
                  alt={currentTestimonial.author}
                  className="h-full w-full object-cover"
                  src={currentTestimonial.authorImage}
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#222222]">
                  {currentTestimonial.author}
                </h4>
                <p className="text-[#81848a]">{currentTestimonial.role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrevTestimonial}
                className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#004856] text-white transition-colors hover:bg-[#003844]"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#004856] text-white transition-colors hover:bg-[#003844]"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Clients Section */}
          <div className="mt-16 overflow-hidden">
            <div className="flex gap-12 whitespace-nowrap">
              <div className="animate-marquee flex gap-30">
                {[...clients, ...clients]?.map((c, i) => (
                  <img
                    key={i}
                    alt={c?.name}
                    className="h-24 object-contain"
                    src={c?.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Services;
