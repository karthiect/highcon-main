import { Link, useParams } from "react-router-dom";
import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";
import { ScrollToTop } from "../../components/ScrollToTop";
import { Footer } from "../../components/Footer";

import HeroSection from "../../components/HeroSection";
import { paths } from "../../constants/paths";
import { normalizePath } from "../../helpers/pathUtils";

import { ContentSection } from "../../components/ContentSection";
import { SmallProductThumbnail } from "../../components/SmallProductThumbnail";
import { DetailProductCard } from "../../components/DetailProductCard";
import { ProductGrid } from "../../components/ProductGrid";
import {
  productsData,
  type LayerOneProductsType,
  type LayerThreeProductsType,
  type LayerTwoProductsType,
} from "../../constants/productsData";
import NotFound from "../NotFound";

interface CraneDetailPagePropType {
  data: LayerOneProductsType & LayerTwoProductsType & LayerThreeProductsType;
  isBulk: boolean;
}

export function CraneDetailPage({
  data,
  isBulk,
}: CraneDetailPagePropType) {
  const params = useParams();
  const { layerOne, layerTwo, layerThree, layerFour } = params;

  const {
    heroData,
    image,
    shortDescription,
    title,
    detailPageContent,
    layerTwoProducts,
    layerThreeProducts,
    layerFourProducts,
    // technicalSpecifications,
    // additionalData,
    // keyPerformanceHighlights,
    // detailedDescription,
    // keyAdvantages,
    // advantagesImage,
    // productConfigurations,
    // pictureGallery,
  } = data;
  if (
    !(
      (layerTwoProducts && layerTwoProducts?.length > 0) ||
      (layerThreeProducts && layerThreeProducts?.length > 0) ||
      (layerFourProducts && layerFourProducts?.length > 0)
    )
  ) {
    return <NotFound />;
  }

  const layerData = layerTwoProducts || layerThreeProducts || layerFourProducts;
  const currentLayer = layerFour || layerThree || layerTwo || layerOne || "";

  const breadcrumbs: { label: string; href?: string }[] = [
    { label: "Home", href: paths?.home },
    {
      label: isBulk ? "Bulk Material Handling" : "Material Handling",
      href: isBulk ? paths?.bulk : paths?.material,
    },
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
          description: heroData?.description
            ? heroData?.description
            : shortDescription || "",
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

      {/* Product Detail Section */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
          {/* Product Title and Description */}
          <div className="mx-auto mb-16 max-w-300">
            {/* Three Row Content Layout with Different Styles */}
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
          </div>

          {/* Small Product Images Grid */}
          {detailPageContent && layerData && layerData?.length > 0 && (
            <div className="mx-auto mb-12 flex max-w-7xl flex-row flex-wrap items-stretch justify-center gap-6 lg:gap-8">
              {layerData?.map((p, index) => (
                <div key={index} className="w-50">
                  <SmallProductThumbnail
                    image={p?.image?.src || p?.heroData?.image?.src || ""}
                    title={p?.heroData?.title || p?.title || ""}
                    onClick={() => {
                      if (p.id) {
                        const element = document.getElementById(
                          `product-${p.id}`,
                        );
                        element?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Products Button */}
          <div className="mb-16 flex justify-center">
            <div className="rounded-2xl bg-black px-12 py-3">
              <span className="font-['Manrope'] text-[24px] font-bold tracking-[-0.5px] text-white">
                Explore Products Below
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto mb-16 h-px max-w-185.5 bg-black" />

          {/* Additional Products Grid */}
          <ProductGrid columns="2" className="mb-16">
            {layerData?.map((p, index) => (
              <DetailProductCard
                key={index}
                id={`product-${p.id}`}
                image={p?.image?.src || p?.heroData?.image?.src || ""}
                title={p?.heroData?.title || p?.title || ""}
                description={
                  p?.shortDescription ||
                  p?.heroData?.description ||
                  p?.heroData?.subtitle ||
                  ""
                }
                badge={isBulk ? "Bulk" : "Material"}
                badgeColor={"#14525d"}
                buttonLink={normalizePath(`${isBulk ? paths?.bulk : paths?.material}${layerOne}${currentLayer === layerFour
                  ? `/${layerTwo}/${layerThree}/${layerFour}`
                  : currentLayer === layerThree
                    ? `/${layerTwo}/${layerThree}`
                    : currentLayer === layerTwo
                      ? `/${layerTwo}`
                      : ""
                  }/${p.id}`)}
              />
            ))}
          </ProductGrid>

          {/* Divider */}
          <div className="mx-auto mb-16 h-px max-w-185.5 bg-black" />

          {/* Back to Home Button */}
          <div className="mt-12 flex justify-center">
            <Link
              to={normalizePath(paths?.home)}
              className="rounded-xl border-2 border-black px-6 py-2.5 shadow-[0px_4px_2.9px_1px_rgba(0,0,0,0.75)] transition-colors hover:bg-gray-50"
            >
              <span className="font-['Manrope'] tracking-[-0.5px] text-[#222222]">
                Back to Home
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <Footer isBulk={isBulk} />
    </div>
  );
}
