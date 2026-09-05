import { useParams } from "react-router-dom";
import { productsData } from "../constants/productsData";
import NotFound from "./NotFound";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


interface ProductLayerFourType {
  isBulk?: boolean;
}

const ProductLayerFour = ({ isBulk = false }: ProductLayerFourType) => {
  const params = useParams();
  const { layerOne, layerTwo, layerThree, layerFour } = params;
  const data = productsData?.find((p) => p?.id === layerOne);
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  if (!data || !data?.layerOneProducts) return <NotFound />;

  const dataTwo = data?.layerOneProducts?.find((p) => p?.id === layerTwo);

  if (!dataTwo || !dataTwo?.layerTwoProducts) return <NotFound />;

  const dataThree = dataTwo?.layerTwoProducts?.find(
    (p) => p?.id === layerThree,
  );

  if (!dataThree || !dataThree?.layerThreeProducts) return <NotFound />;
  // alert(JSON.stringify(dataThree?.layerThreeProducts));

  const dataFour = dataThree?.layerThreeProducts?.find(
    (p) => p?.id === layerFour,
  );

  if (!dataFour || !dataFour?.Component) return <NotFound />;

  const { Component } = dataFour;

  // alert(JSON.stringify(dataFour));

  return <>
    <h1 className="visually-hidden">
      {metaTitle || data?.title}
    </h1>

    <Component data={dataFour} isBulk={isBulk} />;
  </>
};

export default ProductLayerFour;
