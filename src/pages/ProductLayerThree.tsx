import { useParams } from "react-router-dom";
import { productsData } from "../constants/productsData";
import NotFound from "./NotFound";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


interface ProductLayerThreeType {
  isBulk?: boolean;
}

const ProductLayerThree = ({ isBulk = false }: ProductLayerThreeType) => {
  const params = useParams();
  const { layerOne, layerTwo, layerThree } = params;
  const data = productsData?.find((p) => p?.id === layerOne);
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  if (!data || !data?.layerOneProducts) return <NotFound />;

  const dataTwo = data?.layerOneProducts?.find((p) => p?.id === layerTwo);

  if (!dataTwo || !dataTwo?.layerTwoProducts) return <NotFound />;

  const dataThree = dataTwo?.layerTwoProducts?.find(
    (p) => p?.id === layerThree,
  );

  if (!dataThree || !dataThree?.Component) return <NotFound />;

  const { Component } = dataThree;

  return (
    <>
      <h1 className="visually-hidden">
        {metaTitle || data?.title}
      </h1>

      <Component data={dataThree} isBulk={isBulk} />   ;
    </>)
};

export default ProductLayerThree;
