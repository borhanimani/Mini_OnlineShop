import Search from "./search";
import CategoryFilter from "./categoryfilter";
import { Categories } from "@/utils/project-types";

export default function Filterbar({ list }: Categories) {
  return (
    <section className="flex flex-row items-center mt-1 mx-15 gap-20 h-1/8">
      <Search />
      <CategoryFilter list={list} />
    </section>
  );
}