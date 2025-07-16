'use client'
import Filterbar from "./fliterbar"
import ProductList from "./productlist";
import { productList } from "@/utils/project-types";

export default function ProductSection() {
  return (
    <>
      <Filterbar />
      <ProductList list={productList} />
    </>
  );
}