'use client'
import Filterbar from "./fliterbar"
import ProductList from "./productlist";
import { Products, ProductArray } from "@/utils/project-types";
import { filterList, getCategoryList } from "@/utils/list-functions";
import { useState } from "react";

export default function ProductSection({ list }: Products) {

  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');

  const updateSearch = (text: string): void => {
    setSearchText(text);
  }

  const updateCategory = (text: string): void => {    
    setCategory(text);
  }

  return (
    <>
      <Filterbar list={getCategoryList(list)} onSearchChange={updateSearch} onCategoryChange={updateCategory} />
      <ProductList list={filterList(list, category, searchText)} />
    </>
  );
}