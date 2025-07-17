import Search from "./search";
import CategoryFilter from "./categoryfilter";
import { Filters } from "@/utils/project-types";

export default function Filterbar({ list, onCategoryChange, onSearchChange }: Filters) {
  return (
    <section className="flex flex-row items-center mt-1 mx-15 gap-20 h-1/8">
      <Search />
      <CategoryFilter list={list} />
    </section>
  );
}