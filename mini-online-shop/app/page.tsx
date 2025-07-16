import Navbar from "@/components/navbar";
import Filterbar from "@/components/fliterbar";
import ProductList from "@/components/productlist";

export default function Home() {
  return (
    <>
      <Navbar />
      <Filterbar />
      <ProductList />
    </>
  );
}
