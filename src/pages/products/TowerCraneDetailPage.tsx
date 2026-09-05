import { Link, useParams } from "react-router-dom";
import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";
import { ScrollToTop } from "../../components/ScrollToTop";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {
  productsData,
  type LayerOneProductsType,
} from "../../constants/productsData";
import HeroSection from "../../components/HeroSection";
import { paths } from "../../constants/paths";
import { normalizePath } from "../../helpers/pathUtils";

interface TowerCraneDetailPagePropType {
  data: LayerOneProductsType;
  isBulk: boolean;
}

export function TowerCraneDetailPage({
  data,
  isBulk,
}: TowerCraneDetailPagePropType) {
  const params = useParams();
  const { layerOne } = params;

  const BACK_TO_TITLE = productsData?.find((p) => p?.id === layerOne)?.title;

  const {
    heroData,
    image,
    shortDescription,
    technicalSpecifications,
    additionalData,
  } = data;

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle
        title={`${heroData?.title} ${heroData?.subtitle?.toUpperCase() || ""}`}
      />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      <Header />

      {/* Hero Section */}
      <HeroSection
        data={{
          title: heroData?.title || "",
          description: heroData?.description || shortDescription || "",
          subtitle: heroData?.subtitle || "",
          image: {
            src: heroData?.image?.src || image?.src || "",
            alt: heroData?.image?.alt || image?.alt || "",
          },
        }}
        variant="three"
        overlayColor="bg-[#024756]/50"
      />

      {/* Product Image and Description */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <div className="relative aspect-4/3 overflow-hidden rounded-[40px]">
              <img
                src={image?.src}
                alt={image?.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            {/* Description */}
            <div>
              <h2 className="mb-6 font-['Manrope'] text-2xl tracking-tight md:text-3xl lg:text-4xl">
                Product Overview
              </h2>
              <p className="mb-8 font-['Manrope'] text-lg leading-relaxed font-light text-[#222222] md:text-xl">
                {shortDescription}
              </p>

              {/* Specifications */}
              <h3 className="mb-4 font-['Manrope'] text-xl tracking-tight md:text-2xl">
                Technical Specifications
              </h3>
              <div className="mb-8 grid grid-cols-2 gap-4">
                {technicalSpecifications?.standardFeatures?.map(
                  (spec, index) => (
                    <div
                      key={index}
                      className="rounded-xl bg-linear-to-br from-[#004856] to-[#006b7d] p-4 text-white"
                    >
                      <p className="mb-1 font-['Manrope'] text-sm text-white/80">
                        {spec.heading}
                      </p>
                      <p className="font-['Manrope'] text-2xl">{spec.value}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {additionalData?.map(
        (ad, i) =>
          (i === 0 && (
            <section key={i} className="bg-gray-50 px-4 py-16 lg:py-24">
              <div className="mx-auto max-w-10/12">
                <h2 className="mb-12 text-center font-['Manrope'] text-3xl tracking-tight md:text-4xl lg:text-5xl">
                  {ad.title}
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {ad.subData.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-lg"
                    >
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#004856]">
                        <svg
                          className="h-5 w-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="font-['Manrope'] text-lg leading-relaxed text-[#222222]">
                        {feature.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )) ||
          (i === 1 && (
            <section key={i} className="bg-white px-4 py-16 lg:py-24">
              <div className="mx-auto max-w-10/12">
                <h2 className="mb-4 text-center font-['Poppins'] text-3xl md:text-4xl lg:text-5xl">
                  {ad.title}
                </h2>
                <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-600">
                  {ad.description}
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {ad.subData.map((app, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-linear-to-br from-[#004856] to-[#006b7d] p-8 text-white shadow-xl transition-shadow hover:shadow-2xl"
                    >
                      {app.Icon ? (
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white">
                          <app.Icon size={"auto"} className="h-1/2 w-1/2" />
                        </div>
                      ) : (
                        <></>
                      )}
                      <h3 className="mb-3 font-['Poppins'] text-xl">
                        {app.title}
                      </h3>
                      <p className="text-white/90">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )) || <></>,
      )}

      {/* CTA Section */}
      <section className="bg-gray-50 px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-['Poppins'] text-3xl md:text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 font-['Manrope'] text-lg leading-relaxed text-gray-600 md:text-xl">
            Contact us today to learn more about the{" "}
            {`${heroData?.title} ${heroData?.subtitle?.toUpperCase() || ""}`}{" "}
            and how it can enhance your construction project.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              to={normalizePath(paths?.contact)}
              className="rounded-[30px] bg-[#004856] px-8 py-4 font-['Poppins'] text-white shadow-lg transition-colors hover:bg-[#006b7d]"
            >
              Get a Quote
            </Link>
            {BACK_TO_TITLE ? (
              <Link
                to={normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne}`)}
                className="rounded-[30px] border-2 border-[#004856] px-8 py-4 font-['Poppins'] text-[#004856] transition-colors hover:bg-[#004856] hover:text-white"
              >
                Back to {BACK_TO_TITLE}
              </Link>
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>

      <Footer isBulk={isBulk} />
    </div>
  );
}
