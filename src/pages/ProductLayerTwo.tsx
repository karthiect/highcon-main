import { useParams } from "react-router-dom";
import { productsData } from "../constants/productsData";
import NotFound from "./NotFound";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


interface ProductLayerTwoType {
  isBulk?: boolean;
}

const ProductLayerTwo = ({ isBulk = false }: ProductLayerTwoType) => {
  const params = useParams();
  const { layerOne, layerTwo } = params;
  const data = productsData?.find((p) => p?.id === layerOne);
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  if (!data || !data?.layerOneProducts) return <NotFound />;

  const dataTwo = data?.layerOneProducts?.find((p) => p?.id === layerTwo);

  if (!dataTwo || !dataTwo?.Component) return <NotFound />;

  const { Component } = dataTwo;

  return (
    <>
      <h1 className="visually-hidden">
        {metaTitle || data?.title}
      </h1>

      <Component data={dataTwo} isBulk={isBulk} /> ;
    </>)
};

export default ProductLayerTwo;
