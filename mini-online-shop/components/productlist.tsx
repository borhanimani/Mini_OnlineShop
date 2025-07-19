import ProductCard from "./productcard";
import { Products } from "@/utils/project-types";



export default function ProductList({ list }: Products) {
  return (
    <section className=" 
    flex flex-col justify-center flex-wrap
    md:flex-row md:justify-start md:ml-10
    lg:ml-10
    xl:ml-20 m-0">
      {
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
      }
    </section>
  );
} 