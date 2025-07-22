import ProductCard from "./productcard";
import { Products } from "@/utils/project-types";



export default function ProductList({ list }: Products) {
  return (
    <section className=" 
    flex flex-col justify-center flex-wrap w-14/15 mx-auto
    md:flex-row md:justify-start md:mx-auto">

      {
        list.length == 0 ? (<p className="w-full h-full flex flex-row justify-center">No item found</p>) : (
          list.map(item => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            )
          })
        )
      }
    </section>
  );
} 