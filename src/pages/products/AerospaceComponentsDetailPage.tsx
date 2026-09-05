import { useParams } from "react-router-dom";
import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { ScrollToTop } from "../../components/ScrollToTop";
import HeroSection from "../../components/HeroSection";
import { Footer } from "../../components/Footer";
import type { LayerOneProductsType } from "../../constants/productsData";
import { paths } from "../../constants/paths";
import { DetailProductCard } from "../../components/DetailProductCard";
import { normalizePath } from "../../helpers/pathUtils";

interface AerospaceComponentsDetailPagePropType {
  data: LayerOneProductsType;
  isBulk: boolean;
}

export function AerospaceComponentsDetailPage({
  data,
  isBulk,
}: AerospaceComponentsDetailPagePropType) {
  const params = useParams();
  const { layerOne } = params;
  const { id, title, heroData, image, shortDescription, layerTwoProducts } = data;

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      <ScrollToTop />

      {/* Hero Section */}
      <HeroSection
        data={{
          ...heroData,
          description: shortDescription,
          image: {
            src: heroData?.image?.src || image?.src || "",
            alt: heroData?.image?.alt || image?.alt || "",
          },
        }}
        variant="one"
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
      />

      {/* Product Detail Section */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
          {/* Section Title */}
          <div className="mb-16"></div>

          {/* Product Title and Description */}
          <div className="mx-auto mb-16 max-w-238.75"></div>

          {/* Products Button */}
          <div className="mb-16 flex justify-center">
            <div className="rounded-2xl bg-black px-12 py-3">
              <span className="font-['Manrope'] text-[24px] font-bold tracking-[-0.5px] text-white">
                Explore Related Products
              </span>
            </div>
          </div>

          {/* Divider */}

          {/* Additional Products Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
            {layerTwoProducts?.map((p, index) => (
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
                buttonLink={normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne}/${id}/${p.id}`)}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="mx-auto mb-16 h-px max-w-185.5 bg-black" />
        </div>
      </section>

      {/* Footer section */}
      <Footer isBulk={isBulk} />
    </div>
  );
}
