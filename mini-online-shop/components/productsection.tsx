'use client'
import Filterbar from "./fliterbar"
import ProductList from "./productlist";
import { Products, ProductArray } from "@/utils/project-types";
import { filterList, getCategoryList } from "@/utils/list-functions";

export default function ProductSection({ list }: Products) {

  return (
    <>
      <Filterbar list={getCategoryList(list)} />
      <ProductList list={list} />
    </>
  );
}