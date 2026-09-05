import { useRef } from "react";
import { ScrollToTop } from "../../components/ScrollToTop";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";
import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { ProductGrid } from "../../components/ProductGrid";
import { SectionTitle } from "../../components/SectionTitle";
import { Footer } from "../../components/Footer";
import type { ProductsDataType } from "../../constants/productsData";
import { paths } from "../../constants/paths";
import HeroSection from "../../components/HeroSection";
import { DetailProductCard } from "../../components/DetailProductCard";
import { normalizePath } from "../../helpers/pathUtils";

interface IdlersPulleysPageType {
  data: ProductsDataType;
  isBulk: boolean;
}

export function IdlersPulleysPage({ data, isBulk }: IdlersPulleysPageType) {
  const { id, title, heroData, layerOneProducts } = data;
  const productsRef = useRef<HTMLElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      {/* Hero Section */}
      <HeroSection
        data={heroData}
        variant="six"
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
        showScrollButton={true}
        onScrollClick={scrollToProducts}
      />

      {/* Products Section */}
      <section ref={productsRef} className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
          {/* Section Title */}
          <SectionTitle
            line1="Products "
            line1Light={true}
            line2={`for ${title}`}
          />

          {/* Products Grid */}
          <ProductGrid columns="2" className="mb-16">
            {layerOneProducts?.map((p, index) => (
              <DetailProductCard
                key={index}
                image={p?.image?.src || p?.heroData?.image?.src || ""}
                title={p?.title || p?.heroData?.title || ""}
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
          </ProductGrid>
        </div>
      </section>

      {/* Footer section */}
      <Footer isBulk={isBulk} />
    </div>
  );
}
