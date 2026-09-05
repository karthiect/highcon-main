import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { ScrollToTop } from "../../components/ScrollToTop";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";
import { Footer } from "../../components/Footer";
import type { ProductsDataType } from "../../constants/productsData";
import HeroSection from "../../components/HeroSection";
import { paths } from "../../constants/paths";
import { DetailProductCard } from "../../components/DetailProductCard";
import { normalizePath } from "../../helpers/pathUtils";

interface AerospaceComponentsPagePropType {
  data: ProductsDataType;
  isBulk: boolean;
}

export function AerospaceComponentsPage({
  data,
  isBulk,
}: AerospaceComponentsPagePropType) {
  const { id, title, heroData, layerOneProducts, additionalData } = data;

  console.log("isBulk121213123", isBulk);

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      {/* Hero Section */}
      <HeroSection
        data={heroData}
        variant="one"
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
      />

      {/* Products Section */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-2 font-['Manrope'] text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Products <span className="font-light">for</span>
          </h2>
          <h2 className="mb-12 font-['Manrope'] text-3xl tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>

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
                buttonLink={normalizePath(`${isBulk ? paths?.bulk : paths?.material}${id}/${p.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {additionalData?.map(
        (ad, index) =>
          (index === 0 && (
            <section key={index} className="bg-white px-4 py-16 lg:py-24">
              <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-center font-['Poppins'] text-3xl md:text-4xl lg:text-5xl">
                  {ad?.title}
                </h2>

                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                  {ad?.subData?.map((sd, i) => (
                    <div className="flex gap-4" key={i}>
                      <div className="shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#004856]">
                          <span className="text-xl text-white">✓</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="mb-2 font-['Poppins'] text-xl">
                          {sd.title}
                        </h3>
                        <p className="text-gray-600">{sd.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )) || <></>,
      )}

      {/* Footer section */}
      <Footer isBulk={isBulk} />
    </div>
  );
}
