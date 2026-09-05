import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";
import {
  productsData,
  type LayerCommonTypes,
} from "../../constants/productsData";
import HeroSection from "../../components/HeroSection";
import { Footer } from "../../components/Footer";
import { paths } from "../../constants/paths";
import { ScrollToTop } from "../../components/ScrollToTop";
import { ContentSection } from "../../components/ContentSection";
import { normalizePath } from "../../helpers/pathUtils";

interface IdlersPulleysProductDetailPagePropsType {
  data: LayerCommonTypes;
  isBulk: boolean;
}

export function IdlersPulleysProductDetailPage({
  data,
  isBulk,
}: IdlersPulleysProductDetailPagePropsType) {
  const params = useParams();
  const { layerOne, layerTwo, layerThree, layerFour, layerFive } = params;
  const { title, heroData, overview, detailPageContent, additionalData, shortDescription, image } = data;
  const navigate = useNavigate();
  const [featureIndex, setFeatureIndex] = useState(0);

  const nextFeature = () => {
    setFeatureIndex(
      (prev) => (prev + 1) % (additionalData?.[0]?.subData?.length || 1),
    );
  };

  const prevFeature = () => {
    setFeatureIndex(
      (prev) =>
        (prev - 1 + (additionalData?.[0]?.subData?.length || 1)) %
        (additionalData?.[0]?.subData?.length || 1),
    );
  };

  const currentLayer =
    layerFive || layerFour || layerThree || layerTwo || layerOne || "";

  const breadcrumbs: { label: string; href?: string }[] = [
    { label: "Home", href: paths?.home },
  ];

  if (layerOne && layerOne === currentLayer) {
    breadcrumbs.push({ label: title });
  } else {
    const layerOneParentData = productsData?.find((p) => p?.id === layerOne);
    breadcrumbs.push({
      label: layerOneParentData?.title || "",
      href: normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne}`),
    });
    if (layerTwo && layerTwo === currentLayer) {
      breadcrumbs.push({ label: title });
    } else {
      const layerTwoParentData = layerOneParentData?.layerOneProducts?.find(
        (p) => p?.id === layerTwo,
      );
      breadcrumbs.push({
        label: layerTwoParentData?.title || title,
        href: normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne}/${layerTwo}`),
      });
      if (layerThree && layerThree === currentLayer) {
        breadcrumbs.push({ label: title });
      } else {
        const layerThreeParentData = layerTwoParentData?.layerTwoProducts?.find(
          (p) => p?.id === layerThree,
        );
        breadcrumbs.push({
          label: layerThreeParentData?.title || title,
          href: normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne}/${layerTwo}/${layerThree}`),
        });
        if (layerFour && layerFour === currentLayer) {
          breadcrumbs.push({ label: title });
        } else {
          const layerFourParentData =
            layerThreeParentData?.layerThreeProducts?.find(
              (p) => p?.id === layerFour,
            );
          breadcrumbs.push({
            label: layerFourParentData?.title || title,
            href: normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne}/${layerTwo}/${layerThree}/${layerFour}`),
          });
          if (layerFive && layerFive === currentLayer) {
            breadcrumbs.push({ label: title });
          }
        }
      }
    }
  }

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      {/* Hero Section */}
      <HeroSection
        data={{
          title: heroData?.title || title,
          description:
            heroData?.description || shortDescription || "",
          image: {
            src: heroData?.image?.src || image?.src || "",
            alt: heroData?.image?.alt || image?.alt || "",
          },
        }}
        variant="six"
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
        breadcrumbs={breadcrumbs}
      />

      <section className="bg-white px-4 py-16 md:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-8 flex items-center gap-2 font-['Manrope'] text-gray-600 transition-colors hover:text-black"
          >
            <ChevronLeft className="h-5 w-5" />
            Back to Steel Rollers - PSV
          </button>

          {/* Product Title */}
          <div className="mx-auto mb-16 max-w-5xl">
            <h2 className="mb-8 text-center font-['Manrope'] text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h2>

            {/* Overview Section */}
            {overview ? (
              <div className="mb-12 space-y-8">
                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                  <div className="inline-block">
                    <p className="mb-2 font-['Manrope'] text-xl text-[#14525d] md:text-2xl">
                      {overview?.title || ""}
                    </p>
                    <div className="h-1 w-full rounded-full bg-[#14525d]"></div>
                  </div>
                </div>

                {/* Overview Content Block */}
                {overview?.paragraphs && overview.paragraphs.length > 0 ? (
                  overview.paragraphs.map((para, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border-l-4 border-[#14525d] bg-gray-50 p-6 md:p-8"
                    >
                      <h3 className="mb-4 font-['Manrope'] text-2xl text-gray-900 md:text-3xl">
                        {para.title}
                      </h3>
                      {para.description?.map((d, i) => (
                        <p
                          key={i}
                          className={`max-w-4xl font-['Manrope'] text-base leading-relaxed text-gray-700 md:text-lg ${i > 0 ? "mt-4" : "mt-0"}`}
                        >
                          {d}
                        </p>
                      ))}
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
            {/* Three Row Content Layout with Different Styles */}
            {detailPageContent ? (
              <div className="space-y-8">
                {detailPageContent?.map((content, index) => (
                  <ContentSection
                    key={index}
                    type={content.type}
                    title={content.title}
                    paragraphs={content.paragraphs}
                    paragraphPairs={content.paragraphPairs}
                  />
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>

          {/* Main Features Carousel Section */}
          {additionalData && additionalData?.length > 0 ? (
            additionalData?.map((ad, i) =>
              i === 0 ? (
                <div key={i} className="mx-auto mb-16 max-w-6xl">
                  <div className="mb-12 text-center">
                    <h3 className="mb-2 font-['Manrope'] text-3xl md:text-4xl">
                      {ad.title}
                    </h3>
                    <div className="mx-auto h-1 w-32 rounded-full bg-[#14525d]"></div>
                  </div>

                  {/* Carousel Container */}
                  <div className="relative">
                    {/* Navigation Arrows - Positioned outside */}
                    <button
                      onClick={prevFeature}
                      className="absolute top-1/2 left-0 z-10 hidden h-12 w-12 -translate-x-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#14525d] bg-transparent text-[#14525d] transition-all hover:bg-[#14525d] hover:text-white md:flex lg:-translate-x-16"
                      aria-label="Previous feature"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>

                    <button
                      onClick={nextFeature}
                      className="absolute top-1/2 right-0 z-10 hidden h-12 w-12 translate-x-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#14525d] bg-transparent text-[#14525d] transition-all hover:bg-[#14525d] hover:text-white md:flex lg:translate-x-16"
                      aria-label="Next feature"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Feature Card */}
                    <div className="flex min-h-100 flex-col justify-center rounded-2xl border-2 border-[#14525d] bg-white p-8 md:p-10">
                      {/* Icon */}
                      {ad?.subData[featureIndex].Icon ? (
                        <div className="mb-6 flex justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#14525d]">
                            {(() => {
                              const Icon = ad?.subData[featureIndex].Icon;
                              return <Icon className="h-8 w-8 text-white" />;
                            })()}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}

                      {/* Title */}
                      <h4 className="mb-6 text-center font-['Manrope'] text-2xl text-gray-900 md:text-3xl">
                        {ad?.subData[featureIndex].title}
                      </h4>

                      {/* Badges */}
                      <div className="mb-6 flex flex-wrap justify-center gap-2">
                        {ad?.subData?.[featureIndex]?.badges?.map(
                          (badge, idx) => (
                            <span
                              key={idx}
                              className="rounded-full bg-[#14525d] px-4 py-2 font-['Manrope'] text-sm text-white"
                            >
                              {badge}
                            </span>
                          ),
                        )}
                      </div>

                      {/* Description */}
                      {ad?.subData[featureIndex].description ? (
                        <p className="flex-1 text-center font-['Manrope'] text-base leading-relaxed text-gray-700 md:text-lg">
                          {ad?.subData[featureIndex].description}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>

                    {/* Dots Indicator */}
                    <div className="mt-8 flex justify-center gap-2">
                      {ad?.subData?.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setFeatureIndex(index)}
                          className={`h-3 w-3 rounded-full transition-all ${index === featureIndex
                            ? "w-8 bg-[#14525d]"
                            : "bg-gray-300"
                            }`}
                          aria-label={`Go to feature ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              ),
            )
          ) : (
            <></>
          )}
        </div>
      </section>

      {/* Footer section */}
      <Footer isBulk={isBulk} />
    </div>
  );
}
