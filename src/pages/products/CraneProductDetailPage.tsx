import { Link } from "react-router-dom";
import { useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { ScrollToTop } from "../../components/ScrollToTop";
import HeroSection from "../../components/HeroSection";
import type { LayerOneProductsType } from "../../constants/productsData";
import { paths } from "../../constants/paths";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";
import { normalizePath } from "../../helpers/pathUtils";

interface CraneProductDetailPagePropType {
  data: LayerOneProductsType;
  isBulk: boolean;
}

export function CraneProductDetailPage({ data, isBulk }: CraneProductDetailPagePropType) {
  const {
    title,
    heroData,
    detailedDescription,
    keyPerformanceHighlights,
    advantagesImage,
    keyAdvantages,
    productConfigurations,
    technicalSpecifications,
    pictureGallery,
    shortDescription,
    image,
  } = data;
  const [selectedConfigTab, setSelectedConfigTab] = useState(0);
  const [advantageImageIndex, setAdvantageImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === (pictureGallery?.length || 1) - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? (pictureGallery?.length || 1) - 1 : prev - 1,
    );
  };

  console.log(isBulk);

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      {/* Hero Section */}
      <HeroSection
        data={{
          title: heroData?.title || title,
          description: heroData?.description || shortDescription || "",
          image: {
            src: heroData?.image?.src || image?.src || "",
            alt: heroData?.image?.alt || image?.alt || "",
          },
        }}
        variant="four"
        overlayColor="bg-black/40"
        contentAlignment="end"
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
      />

      {/* Main Content Section */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
          {/* Detailed Description */}
          {detailedDescription ? (
            <div className="mb-16">
              <h2 className="mb-6 text-center font-['Manrope'] text-3xl font-bold text-[#000000] md:text-4xl">
                {detailedDescription?.title}
              </h2>
              <p className="mb-6 text-center font-['Manrope'] text-xl leading-relaxed text-[#000000]">
                {detailedDescription?.subtitle}
              </p>
              {detailedDescription?.description?.map((para, index) => (
                <p
                  key={index}
                  className="mb-4 text-center font-['Manrope'] text-lg leading-relaxed font-light text-[#000000]"
                >
                  {para}
                </p>
              ))}
            </div>
          ) : (
            <></>
          )}

          {/* Key Performance Highlights */}
          {keyPerformanceHighlights ? (
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              {keyPerformanceHighlights.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="mb-2 text-5xl font-bold text-[#14525d] md:text-6xl">
                    {item.title}
                    {item.unit && (
                      <span className="ml-1 text-3xl">{item.unit}</span>
                    )}
                  </div>
                  <div className="text-lg text-gray-700">{item.value}</div>
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}

          {/* Key Advantages */}
          {advantagesImage ? (
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* First Column - Image Carousel */}
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-full">
                  <img
                    src={advantagesImage[advantageImageIndex]}
                    alt={`${title} - Image ${advantageImageIndex + 1}`}
                    className="h-auto w-full object-contain"
                  />
                </div>

                {/* Dot Navigation */}
                {advantagesImage.length > 1 && (
                  <div className="mt-6 flex gap-2">
                    {advantagesImage.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setAdvantageImageIndex(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-200 ${advantageImageIndex === index
                          ? "scale-110 bg-[#14525d]"
                          : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Second Column - Content */}
              {keyAdvantages ? (
                <div>
                  <h2 className="mb-8 font-['Manrope'] text-3xl font-bold text-[#000000] md:text-4xl">
                    {keyAdvantages?.heading}
                  </h2>
                  <div className="space-y-4">
                    {keyAdvantages?.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-[#14525d]" />
                        <span className="font-['Manrope'] text-lg text-[#000000]">
                          {item.description}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}

          {/* Product Configurations */}
          {productConfigurations ? (
            <div className="mb-16">
              <h2 className="mb-8 text-start font-['Manrope'] text-3xl font-bold text-[#000000] md:text-4xl">
                Product and configurations
              </h2>

              {/* Configuration Tabs */}
              <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <div className="mb-12 flex w-max justify-center gap-4">
                  {productConfigurations.map((config, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedConfigTab(index)}
                      className={`cursor-pointer rounded-full px-6 py-2 font-['Manrope'] transition-colors ${selectedConfigTab === index
                        ? "bg-[#14525d] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                      {config.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Configuration Image */}
              <div className="relative mx-auto mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={productConfigurations[selectedConfigTab].image}
                  alt={productConfigurations[selectedConfigTab].alt}
                  className="h-full w-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Technical Specifications */}
              {technicalSpecifications ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {/* Standard Features */}
                  <div className="flex h-full w-full flex-col">
                    <h3 className="rounded-t-lg bg-[#14525d] py-3 text-center font-['Manrope'] text-xl font-bold text-white">
                      Standard features
                    </h3>
                    <div className="h-full space-y-4 rounded-b-lg border-2 border-[#14525d] p-6">
                      {technicalSpecifications.standardFeatures.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="border-b border-gray-200 pb-3 last:border-0"
                          >
                            <div className="mb-1 font-['Manrope'] font-semibold text-gray-900">
                              {feature.heading}
                            </div>
                            <div className="font-['Manrope'] text-gray-700">
                              {feature.value}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Optional Features */}
                  <div className="flex h-full w-full flex-col">
                    <h3 className="rounded-t-lg bg-gray-300 py-3 text-center font-['Manrope'] text-xl font-bold text-gray-900">
                      Optional features
                    </h3>
                    <div className="h-full space-y-4 rounded-b-lg border-2 border-gray-300 p-6">
                      {technicalSpecifications?.optionalFeatures?.map(
                        (feature, index) => (
                          <div
                            key={index}
                            className="border-b border-gray-200 pb-3 last:border-0"
                          >
                            <div className="mb-1 font-['Manrope'] font-semibold text-gray-900">
                              {feature.heading}
                            </div>
                            <div className="font-['Manrope'] text-gray-700">
                              {feature.value}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}

          {/* Picture Gallery */}
          {pictureGallery ? (
            <div className="mb-16">
              <h2 className="mb-8 text-center font-['Manrope'] text-3xl font-bold text-[#000000] md:text-4xl">
                Picture Gallery
              </h2>
              <div className="mx-auto max-w-5xl">
                <div className="relative aspect-video overflow-hidden rounded-[20px]">
                  <img
                    src={pictureGallery[currentSlide].image}
                    alt={pictureGallery[currentSlide].alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-end bg-transparent">
                    <div className="flex gap-4 p-4">
                      <button
                        onClick={prevSlide}
                        className="cursor-pointer rounded-full bg-[#14525d] p-2"
                      >
                        <ChevronLeft className="h-6 w-6 text-white" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="cursor-pointer rounded-full bg-[#14525d] p-2"
                      >
                        <ChevronRight className="h-6 w-6 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
            <Link
              to={normalizePath(paths?.home)}
              className="rounded-full border-2 border-black bg-white px-6 py-2 transition-all duration-200 ease-in-out hover:bg-gray-50"
            >
              <span className="font-['Manrope'] tracking-wide text-black">
                HOME
              </span>
            </Link>

            <Link
              to={normalizePath(paths?.contact)}
              className="rounded-full border-2 border-black bg-white px-8 py-2 transition-all duration-200 ease-in-out hover:bg-gray-50"
            >
              <span className="font-['Poppins'] text-black">Get a quote</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}