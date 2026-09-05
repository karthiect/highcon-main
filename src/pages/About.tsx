import { ScrollToTop } from "../components/ScrollToTop";
import { FloatingSemiCircleMenu } from "../components/FloatingSemiCircleMenu";
import { FloatingVerticalTitle } from "../components/FloatingVerticalTitle";
import { Footer } from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Images from "../constants/images";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


const About = () => {
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;
  return (
    <div className="relative min-h-screen bg-white">
      <FloatingVerticalTitle title="About Us" />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      {/* Hero Section */}
      <HeroSection
        variant="one"
        data={{
          image: {
            src: Images?.AboutHeroBg,
            alt: "About Us Hero",
          },
          title: "Engineering Precision\nEmpowering Industries",
          description:
            "With 20+ years of expertise, Highcon Innovation International delivers world-class conveyor and aerospace components from its advanced Coimbatore facility — where technology meets trust, and performance drives progress.",
        }}
      />

      {/* About Section */}
      <section className="relative bg-white py-8 lg:py-16">
        <div className="container mx-auto max-w-10/12 px-4 lg:px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left: Images */}
            <div className="relative h-100 lg:h-150">
              <div className="absolute top-0 left-0 h-40 w-48 overflow-hidden rounded-[40px] md:h-52 md:w-64">
                <img
                  alt="About image 1"
                  className="h-full w-full object-cover"
                  src={Images?.AboutusSection2}
                />
              </div>
              <div className="absolute top-24 left-1/8 h-80 w-64 overflow-hidden rounded-[40px] border-4 border-[#004856] shadow-lg md:top-32 md:h-76.5 md:w-96 lg:h-101.5 lg:w-78.75">
                <img
                  alt="About image 2"
                  className="h-full w-full object-cover object-right"
                  src={Images?.AboutusSection1}
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <div className="mb-2 flex items-center">
                <div className="mr-3 h-4 w-4 rounded-sm bg-[#004856]" />
                <span className="font-['Manrope'] text-sm font-bold tracking-[2.8px] text-[#222222]">
                  ABOUT US
                </span>
              </div>
              {metaTitle ? (
                <h1 className="visually-hidden">
                  {metaTitle}
                </h1>
              ) : null}
              <h2 className="mb-6 font-['Manrope'] text-3xl leading-tight font-light text-[#222222] md:text-4xl lg:text-5xl">
                Building quality through
                <br />
                <span className="font-bold">industrial innovation</span>
              </h2>
              <p className="mb-6 font-['Manrope'] text-base text-[#81848a] md:text-lg">
                With over 20 years of excellence, Highcon Innovation
                International has established itself as a trusted leader in
                precision manufacturing, delivering high-performance conveyor
                components, idlers, pulleys, and aerospace components to
                industries worldwide. Our unwavering commitment to quality,
                innovation, and customer satisfaction has earned us a reputation
                as a reliable partner for diverse and demanding applications.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 shrink-0 text-[#004856]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="font-['Manrope'] text-[#222222]">
                    Sustainable Manufacturing
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 shrink-0 text-[#004856]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="font-['Manrope'] text-[#222222]">
                    Advanced Automation
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 shrink-0 text-[#004856]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="font-['Manrope'] text-[#222222]">
                    Efficient Production Processes
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="mr-3 h-6 w-6 shrink-0 text-[#004856]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                  <span className="font-['Manrope'] text-[#222222]">
                    Reliable Delivery Services
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid Section */}
      <section className="relative bg-white py-8 pt-1.25 lg:py-16">
        <div className="container mx-auto max-w-10/12 px-4 lg:px-6">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 font-['Manrope'] text-3xl leading-tight font-bold text-[#222222] md:text-4xl lg:text-5xl">
              Conveyor Systems Expertise
            </h2>
            <p className="m-2 font-['Manrope'] text-[#81848a]">
              We recognize the critical role that idlers play in optimizing
              conveyor performance. The correct selection and design of idlers
              are essential to ensure maximum load-carrying capacity,
              cost-efficiency, and reliability. At Highcon, we engineer idlers
              with precision, factoring in their operating environment, design
              limitations, and performance requirements to guarantee that your
              conveyor systems function flawlessly for thousands of hours.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-16 xl:grid-cols-2">
            {/* Item 1 */}
            <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
              <div className="dow-lg h-48 w-full overflow-hidden rounded-[20px] border-2 border-[#004856] sm:h-52 sm:w-48 sm:shrink-0 md:h-56 md:w-56 md:rounded-[30px] md:border-4 lg:h-64 lg:w-64 lg:rounded-[40px]">
                <img
                  alt="Innovation"
                  className="h-full w-full object-cover"
                  src={Images?.AboutusAutomaticDouble}
                />
              </div>
              <div className="min-w-0 flex-1 [-ms-overflow-style:none] [scrollbar-width:none] xl:h-64 xl:cursor-all-scroll xl:overflow-y-auto [&::-webkit-scrollbar]:hidden">
                <p className="text-start font-['Manrope'] text-sm leading-relaxed text-[#81848a] md:text-base">
                  <b>
                    Automatic Double-Ended Pipe Cutting and Beveling Machines
                  </b>
                  <br></br>
                  Double-Ended Pipe Turning Machines<br></br>
                  Automatic Double-Ended Bearing House Welding Machines<br></br>
                  Bearing and Sealing Press-Mounting Machines
                  <br></br>
                  This state-of-the-art equipment ensures precision
                  manufacturing, delivering superior reliability and extended
                  lifespans for conveyor systems. From the fabrication of
                  individual components to the integration of complete systems,
                  we provide solutions that enhance operational efficiency while
                  minimizing maintenance costs.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
              <div className="order-2 min-w-0 flex-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:order-1 xl:h-64 xl:cursor-all-scroll xl:overflow-y-auto [&::-webkit-scrollbar]:hidden">
                <p className="text-start font-['Manrope'] text-sm leading-relaxed text-[#81848a] md:text-base">
                  <b>Aerospace Components Expertise</b>
                  <br></br>
                  In addition to our conveyor solutions, Highcon is proud to be
                  at the forefront of aerospace component manufacturing, a field
                  where precision, performance, and adherence to stringent
                  industry standards are non-negotiable. Our aerospace
                  components are crafted to meet the highest specifications,
                  offering unparalleled durability and reliability for critical
                  applications. By leveraging advanced materials, innovative
                  engineering, and meticulous quality control, we deliver
                  solutions that meet the dynamic needs of the aerospace
                  industry.
                </p>
              </div>
              <div className="dow-lg order-1 h-48 w-full overflow-hidden rounded-[20px] border-2 border-[#004856] sm:order-2 sm:h-52 sm:w-48 sm:shrink-0 md:h-56 md:w-56 md:rounded-[30px] md:border-4 lg:h-64 lg:w-64 lg:rounded-[40px]">
                <img
                  alt="Quality"
                  className="h-full w-full object-cover"
                  src={Images?.AboutusAerospace}
                />
              </div>
            </div>
          </div>

          {/* Large centered image */}
          <div className="mx-auto mb-16 hidden max-w-4xl md:block">
            <div className="m-10 h-64 w-full overflow-hidden rounded-[40px] border-4 border-[#004856] shadow-lg md:h-96">
              <img
                alt="Manufacturing facility"
                className="h-full w-full object-cover"
                src={Images?.AboutusLarge}
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-1 gap-8 md:gap-10 lg:gap-16 xl:grid-cols-2">
            {/* Item 3 */}
            <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
              <div className="dow-lg h-48 w-full overflow-hidden rounded-[20px] border-2 border-[#004856] sm:h-52 sm:w-48 sm:shrink-0 md:h-56 md:w-56 md:rounded-[30px] md:border-4 lg:h-64 lg:w-64 lg:rounded-[40px]">
                <img
                  alt="Technology"
                  className="h-full w-full object-cover"
                  src={Images?.AboutusWhyHighcon}
                />
              </div>
              <div className="min-w-0 flex-1 [-ms-overflow-style:none] [scrollbar-width:none] xl:h-64 xl:cursor-all-scroll xl:overflow-y-auto [&::-webkit-scrollbar]:hidden">
                <p className="text-start font-['Manrope'] text-sm leading-relaxed text-[#81848a] md:text-base">
                  <b>Why Highcon?</b>
                  <br></br>
                  Our two decades of experience and a team of highly skilled
                  engineers position us as experts in precision manufacturing.
                  Whether for industrial operations or aerospace applications,
                  our products are trusted globally for their superior quality,
                  innovative design, and long-lasting performance. Every project
                  we undertake is guided by our values of excellence, integrity,
                  and client-first focus.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
              <div className="order-2 min-w-0 flex-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:order-1 xl:h-64 xl:cursor-all-scroll xl:overflow-y-auto [&::-webkit-scrollbar]:hidden">
                <p className="text-start font-['Manrope'] text-sm leading-relaxed text-[#81848a] md:text-base">
                  <b>Our Legacy</b>
                  <br></br>
                  From powering conveyor systems in challenging environments to
                  enabling breakthroughs in aerospace innovation, Highcon
                  Innovation International is driven by a mission to provide
                  world-class engineering solutions. Our products are built to
                  last, designed to excel, and tailored to empower businesses to
                  reach new heights of efficiency and reliability.
                </p>
              </div>
              <div className="dow-lg order-1 h-48 w-full overflow-hidden rounded-[20px] border-2 border-[#004856] sm:order-2 sm:h-52 sm:w-48 sm:shrink-0 md:h-56 md:w-56 md:rounded-[30px] md:border-4 lg:h-64 lg:w-64 lg:rounded-[40px]">
                <img
                  alt="Excellence"
                  className="h-full w-full object-cover"
                  src={Images?.AboutusOurLegacy}
                />
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <p className="mt-12 text-center font-['Manrope'] text-sm md:text-base text-[#81848a] italic">
            Trust Highcon Innovation International for expertise that spans
            industries and solutions that exceed expectations.
          </p>
        </div>
      </section>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default About;
