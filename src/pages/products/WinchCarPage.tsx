import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { ScrollToTop } from "../../components/ScrollToTop";
import { Footer } from "../../components/Footer";
import { ContentSection } from "../../components/ContentSection";
import type { ProductsDataType } from "../../constants/productsData";
import HeroSection from "../../components/HeroSection";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";

interface WinchCarPagePropType {
  data: ProductsDataType;
  isBulk: boolean;
}

export function WinchCarPage({ data, isBulk }: WinchCarPagePropType) {
  const { title, heroData, detailPageContent } = data;
  console.log(isBulk);

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      {/* Hero Section */}
      <HeroSection
        data={heroData}
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
      />

      {/* Products Section */}
      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
          <div className="mx-auto mb-16 max-w-300">
            {/* Three Row Content Layout with Different Styles */}
            <div className="space-y-8">
              {detailPageContent?.map((content, index) => (
                <ContentSection
                  key={index}
                  type={content.type}
                  title={content?.title}
                  paragraphs={content?.paragraphs}
                  list={content?.list}
                  paragraphPairs={content?.paragraphPairs}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer isBulk = {isBulk}/>
    </div>
  );
}
