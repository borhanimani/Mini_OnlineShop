import Search from "./search";
import CategoryFilter from "./categoryfilter";

export default function Filterbar() {
  return (
    <section className="flex flex-row items-center mt-30 mx-15 gap-20">
      <Search />
      <CategoryFilter />
    </section>
  );
}