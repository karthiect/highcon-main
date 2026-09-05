// import { Link } from "react-router-dom";
import { FloatingVerticalTitle } from "../../components/FloatingVerticalTitle";
import { ScrollToTop } from "../../components/ScrollToTop";
import HeroSection from "../../components/HeroSection";
import { Footer } from "../../components/Footer";
import { paths } from "../../constants/paths";
import { normalizePath } from "../../helpers/pathUtils";

import type { ProductsDataType } from "../../constants/productsData";
import { DetailProductCard } from "../../components/DetailProductCard";
import { FloatingSemiCircleMenu } from "../../components/FloatingSemiCircleMenu";

interface TowerCranesPagePropType {
  data: ProductsDataType;
  isBulk: boolean;
}

export function TowerCranesPage({ data, isBulk }: TowerCranesPagePropType) {
  const { id, title, heroData, layerOneProducts, additionalData } = data;
  // const products = towerCraneData.products;

  return (
    <div className="relative w-full bg-white">
      <FloatingVerticalTitle title={title} />
      <ScrollToTop />
      <FloatingSemiCircleMenu />

      <HeroSection
        data={heroData}
        badge={isBulk ? "Bulk" : "Material"}
        badgeColor={"#14525d"}
      />

      <section className="bg-white px-4 py-16 lg:py-24">
        <div className="mx-auto max-w-10/12">
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
                  p?.heroData?.subtitle
                    ? `Model: ${p.heroData.subtitle}`
                    : undefined
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
        (ad, i) =>
          (i === 0 && (
            <section key={i} className="bg-gray-50 px-4 py-16 lg:py-24">
              <div className="mx-auto max-w-10/12">
                <h2 className="mb-12 text-center font-['Poppins'] text-3xl md:text-4xl lg:text-5xl">
                  {ad.title}
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {ad.subData.map((spec, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-white p-8 shadow-lg"
                    >
                      {spec.Icon ? (
                        <div className="mb-4 text-2xl text-[#024756]">
                          <spec.Icon size={"auto"} className="h-16 w-16" />
                        </div>
                      ) : (
                        <></>
                      )}
                      <h3 className="mb-3 font-['Poppins'] text-xl">
                        {spec.title}
                      </h3>
                      {spec.subTitle ? (
                        <p className="mb-2 text-gray-600">{spec.subTitle}</p>
                      ) : (
                        <></>
                      )}
                      <p className="text-sm text-gray-500">
                        {spec.description}
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
      <Footer isBulk={isBulk} />
    </div>
  );
}
