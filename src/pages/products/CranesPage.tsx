import { useEffect, useState } from "react";
import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";
import { ScrollToTop } from "../../components/ScrollToTop";
import HeroSection from "../../components/HeroSection";
import { Footer } from "../../components/Footer";
import type { ProductsDataType } from "../../constants/productsData";
import { paths } from "../../constants/paths";
import { DetailProductCard } from "../../components/DetailProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { normalizePath } from "../../helpers/pathUtils";

interface CranesPagePropType {
  data: ProductsDataType;
  isBulk: boolean;
}

export function CranesPage({ data, isBulk }: CranesPagePropType) {
  const { id, title, heroData, layerOneProducts, additionalData } = data;

  const navigate = useNavigate();
  const params = useParams();
  const { layerOne } = params;
  const [isToggleOn, setIsToggleOn] = useState<boolean>(layerOne?.includes('-omis') ? true : false);

  useEffect(() => {
    if (isToggleOn) {
      if (!layerOne?.includes('-omis')) {
        navigate(normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne}-omis`))
      }
    } else {
      if (layerOne?.includes('-omis')) {
        navigate(normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne.replace('-omis', '')}`))
      }
    }
  }, [isToggleOn]);

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      <ScrollToTop />
      <FloatingSemiCircleMenu />
      {/* Hero Section */}
      <HeroSection
        data={heroData}
        variant="one"
        // overlayColor={
        //   isToggleOn
        //     ? "bg-[#001ca8b3] opacity-80 mix-blend-color"
        //     : "bg-black/40"
        // }
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
      />

      {/* Products Section */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
          <div className="mb-12 flex items-start justify-between">
            <div>
              <h2 className="mb-2 font-['Manrope'] text-3xl md:text-4xl lg:text-5xl">
                Products <span className="font-light">for</span>
              </h2>
              <h2 className="font-['Manrope'] text-3xl md:text-4xl lg:text-5xl">
                {title}
              </h2>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setIsToggleOn(!isToggleOn)}
              className={`relative h-14 w-30 rounded-full border-4 transition-all duration-300 ${isToggleOn
                ? "border-[#001ca8b3] bg-[#001ca8b3]"
                : "border-[#13515c] bg-[#13515c]"
                }`}
              aria-label="Toggle view"
            >
              <div
                className={`absolute top-1/2 h-10 w-10 -translate-y-1/2 rounded-full shadow-lg transition-all duration-300 ${isToggleOn
                  ? "left-[calc(100%-48px)] bg-[#fbbf24]"
                  : "left-2 bg-[#E8C547]"
                  }`}
              />
            </button>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {layerOneProducts?.map((p, index) => (
              <DetailProductCard
                key={index}
                id={`product-${p.id}`}
                image={p?.image?.src || p?.heroData?.image?.src || ""}
                title={p?.heroData?.title || p?.title || ""}
                subtitle={
                  p?.heroData?.subtitle ? `${p.heroData.subtitle}` : undefined
                }
                description={
                  p?.shortDescription ||
                  p?.heroData?.description ||
                  p?.heroData?.subtitle ||
                  ""
                }
                badge={isBulk ? "Bulk" : "Material"}
                badgeColor={"#14525d"}
                // badgeColor={isToggleOn ? "#001ca8b3" : "#14525d"}
                // imageOverlay={
                //   isToggleOn ? (
                //     <div className="absolute inset-0 bg-[#001ca8b3] opacity-80 mix-blend-color"></div>
                //   ) : (
                //     <></>
                //   )
                // }
                buttonLink={normalizePath(`${isBulk ? paths?.bulk : paths?.material}${id}/${p.id}`)}
              />
            ))}
          </div>

          {/* Divider Line */}
          <div
            className={`mb-12 h-px w-full ${isToggleOn ? "bg-[#001ca8b3]" : "bg-black"}`}
          />
        </div>
      </section>

      {additionalData?.map(
        (ad, i) =>
          (i === 0 && (
            <section
              key={i}
              className={`px-4 py-16 transition-colors duration-300 lg:py-24 ${isToggleOn ? "bg-blue-50" : "bg-gray-50"
                }`}
            >
              <div className="mx-auto max-w-10/12">
                <h2
                  className={`mb-12 text-center font-['Poppins'] text-3xl md:text-4xl lg:text-5xl ${isToggleOn ? "text-[#001ca8b3]" : "text-[#222222]"
                    }`}
                >
                  {ad?.title}
                </h2>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Feature 1 */}
                  {ad?.subData?.map((sd, i) => (
                    <div
                      key={i}
                      className="rounded-2xl bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
                    >
                      {sd.Icon ? (
                        <div
                          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full text-white ${isToggleOn ? "bg-[#001ca8b3]" : "bg-[#004856]"
                            }`}
                        >
                          <sd.Icon size={"auto"} className="h-1/2 w-1/2" />
                        </div>
                      ) : (
                        <></>
                      )}
                      <h3 className="mb-4 font-['Poppins'] text-xl">
                        {sd.title}
                      </h3>
                      <p className="text-gray-600">{sd.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )) || <></>,
      )}

      <Footer isBulk={isBulk} />
    </div>
  );
}
