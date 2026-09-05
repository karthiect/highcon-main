import { useParams } from "react-router-dom";
import { productsData } from "../constants/productsData";
import NotFound from "./NotFound";

import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";

interface ProductLayerFiveType {
  isBulk?: boolean;
}

const ProductLayerFive = ({ isBulk = false }: ProductLayerFiveType) => {
  const params = useParams();
  const { layerOne, layerTwo, layerThree, layerFour, layerFive } = params;
  const data = productsData?.find((p) => p?.id === layerOne);
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  if (!data || !data?.layerOneProducts) return <NotFound />;

  const dataTwo = data?.layerOneProducts?.find((p) => p?.id === layerTwo);

  if (!dataTwo || !dataTwo?.layerTwoProducts) return <NotFound />;

  const dataThree = dataTwo?.layerTwoProducts?.find(
    (p) => p?.id === layerThree,
  );

  if (!dataThree || !dataThree?.layerThreeProducts) return <NotFound />;

  const dataFour = dataThree?.layerThreeProducts?.find(
    (p) => p?.id === layerFour,
  );

  if (!dataFour || !dataFour?.layerFourProducts) return <NotFound />;

  const dataFive = dataFour?.layerFourProducts?.find(
    (p) => p?.id === layerFive,
  );

  if (!dataFive || !dataFive?.Component) return <NotFound />;

  const { Component } = dataFive;

  return <>


    <h1 className="visually-hidden">
      {metaTitle || data?.title}
    </h1>

    <Component data={dataFive} isBulk={isBulk} />
  </>;
};

export default ProductLayerFive;
