'use client'
import Filterbar from "./fliterbar"
import ProductList from "./productlist";
import { Products, ProductArray, UseQueryProduct } from "@/utils/project-types";
import { filterList, getCategoryList } from "@/utils/list-functions";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/libs/http-requests";
import ProductLoading from "./productloading";
import ProductError from "./producterror";

export default function ProductSection({ list }: Products) {
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');

  const { data, isLoading, isError }: UseQueryProduct = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const updateSearch = (text: string): void => {
    setSearchText(text);
  }

  const updateCategory = (text: string): void => {
    setCategory(text);
  }

  if (isLoading) {
    return <ProductLoading />
  }

  if (isError) {
    return <ProductError />
  }


  return (
    <>
      <Filterbar list={getCategoryList(data ? data : [])} onSearchChange={updateSearch} onCategoryChange={updateCategory} />
      <ProductList list={filterList(data ? data : [], category, searchText)} />
    </>
  );
}