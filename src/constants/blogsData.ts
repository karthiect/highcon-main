import data from "./blogData.json";
 
export type BlogPost = typeof data[0] & {
  tags?: string[];
};
 
const publishedData = data.filter((item) => item?.status === "Published") ?? [];
 
const blogsData =
  publishedData?.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
 
export default blogsData;