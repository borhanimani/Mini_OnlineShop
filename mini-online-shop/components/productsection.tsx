'use client'
import Filterbar from "./fliterbar"
import ProductList from "./productlist";
import { Products } from "@/utils/project-types";

export default function ProductSection({ list }: Products) {
  return (
    <>
      <Filterbar list={["aa", "bb"]} />
      <ProductList list={list} />
    </>
  );
}