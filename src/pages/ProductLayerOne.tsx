import { useParams } from "react-router-dom";
import { productsData } from "../constants/productsData";
import NotFound from "./NotFound";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


interface ProductLayerOneType {
  isBulk?: boolean;
}

const ProductLayerOne = ({ isBulk = false }: ProductLayerOneType) => {
  const params = useParams();
  const { layerOne } = params;
  const data = productsData?.find((p) => p?.id === layerOne);
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  if (!data || !data?.Component) return <NotFound />;

  const { Component } = data;

  return (<>
    <h1 className="visually-hidden">
      {metaTitle || data?.title}
    </h1>
    <Component data={data} isBulk={isBulk} />
  </>)
};

export default ProductLayerOne;
