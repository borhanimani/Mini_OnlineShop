import Search from "./search";
import CategoryFilter from "./categoryfilter";
import { Filters } from "@/utils/project-types";

export default function Filterbar({ list, onCategoryChange, onSearchChange }: Filters) {
  return (
    <section className="
    flex flex-col items-center w-full h-1/8 mt-30
    sm:mt-25
    md:flex-row md:px-10 md:gap-5 md:mt-35 
    lg:mt-35
    xl:gap-17 xl:ml-13">
      <Search onSearchChange={onSearchChange} />
      <CategoryFilter list={list} onCategoryChange={onCategoryChange} />
    </section>
  );
}