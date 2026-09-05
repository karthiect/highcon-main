import { IndustryButton } from "../components/IndustryButton";
import { FloatingVerticalTitle } from "../components/FloatingVerticalTitle";
import { ScrollToTop } from "../components/ScrollToTop";
import { Header } from "../components/Header";
import { productButtons } from "../constants/productsData";
import { paths } from "../constants/paths";
import Images from "../constants/images";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";

const Bulk = () => {
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;
  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingVerticalTitle title="Home" />

      <ScrollToTop />
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          alt="Construction cranes background"
          className="h-full w-full object-cover"
          src={Images?.BulkBg}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Header */}
      <Header hideIndustriesDropdown={true} />

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-3 pt-20 sm:px-4">
        {/* Hero Section */}
        <div className="mx-auto mb-8 w-full max-w-10/12 text-center sm:mb-12">
          {/* Page Title */}
          <div className="mb-6 sm:mb-8">
            {metaTitle ? (
              <h1 className="visually-hidden">
                {metaTitle}
              </h1>
            ) : null}
            <h2 className="mb-2 font-['Poppins'] text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Bulk Material Handling
            </h2>
            <div className="mx-auto h-1 w-32 rounded-full bg-[rgb(6,158,192)] sm:w-40"></div>
          </div>

          {/* Main Content Card */}
          <div className="mb-8 rounded-[20px] border border-white bg-white/20 p-4 backdrop-blur-[6.8px] sm:mb-12 sm:rounded-[31px] sm:p-6 md:p-8 lg:p-12">
            <h2 className="text-center font-['Poppins'] text-2xl leading-tight font-black tracking-[2px] text-white sm:text-3xl sm:tracking-[3px] md:text-4xl lg:text-5xl">
              Select Your{" "}
              <span className="text-[rgb(6,158,192)]">Industry</span> to
              <br />
              Discover <span className="text-[rgb(6,158,192)]">Solutions</span>
            </h2>
          </div>

          {/* Industry Buttons */}
          <div className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-3 sm:mb-12 sm:gap-4 lg:gap-6">
            {productButtons?.map((pb) => (
              <IndustryButton key={pb.id} to={normalizePath(`${paths?.bulk}${pb.to}`)}>
                {pb.label}
              </IndustryButton>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bulk;
