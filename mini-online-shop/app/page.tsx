import Navbar from "@/components/navbar";
import ProductSection from "@/components/productsection";
import { productList } from "@/utils/project-types";

export default function Home() {

  return (
    <>
      <Navbar />
      <ProductSection list={productList}/>
    </>
  );
}
