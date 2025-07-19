import Search from "./search";
import CategoryFilter from "./categoryfilter";
import { Filters } from "@/utils/project-types";

export default function Filterbar({ list, onCategoryChange, onSearchChange }: Filters) {
  return (
    <section className="
    flex flex-col items-center w-13/15 h-1/8 mt-30 
    sm:mt-25
    md:flex-row md:px-10 md:gap-5 md:mt-35 md:ml-2 
    lg:mt-35
    xl:gap-15 xl:ml-20">
      <Search onSearchChange={onSearchChange} />
      <CategoryFilter list={list} onCategoryChange={onCategoryChange} />
    </section>
  );
}