import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { RotateCw, Settings } from "lucide-react";
import { Footer } from "../../components/Footer";
import type { LayerTwoProductsType } from "../../constants/productsData";
import HeroSection from "../../components/HeroSection";

interface AerospaceComponentsProductDetailPagePropType {
  data: LayerTwoProductsType;
  isBulk: boolean;
}

export function AerospaceComponentsProductDetailPage({
  data,
  isBulk,
}: AerospaceComponentsProductDetailPagePropType) {
  const { title, shortDescription, heroData, additionalData, image } = data;

  const features = additionalData?.[0] || null;

  console.log(isBulk);

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      {/* Hero Section */}
      <HeroSection
        data={{
          title: heroData?.title || title || "",
          description: heroData?.description || shortDescription || "",
          image: {
            src: heroData?.image?.src || image?.src || "",
            alt: heroData?.image?.alt || image?.alt || "",
          },
        }}
        variant="five"
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
      />

      {/* Products Section */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
          {/* Title */}

          {/* Product Images Grid */}
          <div className="mb-16">
            <div className="mb-8">
              <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px]"></div>
            </div>

            {/* Description Heading */}
            <h2 className="mb-6 font-['Manrope'] text-3xl tracking-tight md:text-4xl">
              Description
            </h2>

            {/* Description */}
            <div className="space-y-6 font-['Manrope'] text-lg leading-relaxed font-light text-gray-700 md:text-xl">
              <p>{shortDescription}</p>
              {features?.subData?.length && features?.subData?.length > 0 ? (
                <div>
                  <p className="mb-3 font-semibold">{features?.title}</p>
                  <ul className="list-disc space-y-2 pl-6">
                    {features?.subData?.map((feature, index) => (
                      <li key={index}>{feature?.title}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>

            {additionalData?.map(
              (ad, i) =>
                (i === 1 && (
                  <div key={i} className="mt-16">
                    <div className="mb-8 flex items-center gap-3">
                      <Settings className="h-8 w-8 text-[#B8860B] md:h-10 md:w-10" />
                      <h2 className="font-['Manrope'] text-3xl tracking-tight md:text-4xl lg:text-5xl">
                        {ad?.title}
                      </h2>
                    </div>

                    {/* Specifications Grid - 3 column layout */}
                    <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                      {ad?.subData?.map((spec, index) => (
                        <div
                          className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                          key={index}
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <p className="mb-2 font-['Manrope'] text-sm text-gray-600">
                                {spec?.title}
                              </p>
                              <p className="font-['Manrope'] text-3xl font-light text-gray-900 lg:text-4xl">
                                {spec?.subTitle}{" "}
                                <span className="text-lg font-normal">
                                  {spec?.description}
                                </span>
                              </p>
                            </div>

                            {spec.Icon ? (
                              <div className="mb-4 text-2xl text-[#024756]">
                                <spec.Icon
                                  size={"auto"}
                                  className="h-10 w-10"
                                />
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )) ||
                (i === 2 && (
                  <div key={i} className="mt-12">
                    {/* Operational Heading */}
                    <div className="mb-8 flex items-center gap-3">
                      <RotateCw className="h-8 w-8 text-[#B8860B]" />
                      <h2 className="font-['Manrope'] text-3xl tracking-tight md:text-4xl">
                        {ad?.title}
                      </h2>
                    </div>

                    {/* Specifications Grid - Responsive 2x4 layout */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                      {/* Operating Temperature */}
                      {ad?.subData?.map((spec, index) => (
                        <div
                          className="rounded-2xl bg-[#F5F5F0] p-4 shadow-sm transition-shadow hover:shadow-md lg:p-6"
                          key={index}
                        >
                          <div className="flex items-start gap-3 lg:gap-4">
                            {spec.Icon ? (
                              <div className="mb-4 text-2xl text-[#024756]">
                                <spec.Icon
                                  size={"auto"}
                                  className="mt-1 h-6 w-6 shrink-0 text-[#B8860B] lg:h-8 lg:w-8"
                                />
                              </div>
                            ) : (
                              <></>
                            )}
                            <div className="min-w-0">
                              <p className="mb-1 font-['Manrope'] text-sm text-gray-700 lg:mb-2 lg:text-base">
                                {spec?.title}
                              </p>
                              <p className="font-['Manrope'] text-2xl font-light lg:text-4xl">
                                {spec?.subTitle}
                                <span className="text-lg lg:text-2xl">
                                  {spec?.description}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )) || <></>,
            )}
          </div>
        </div>
      </section>

      {/* Footer section */}
      <Footer isBulk = {isBulk} />
    </div>
  );
}
