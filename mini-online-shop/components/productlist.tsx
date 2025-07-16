import ProductCard from "./productcard";
import { Product, productList } from "@/utils/project-types";
import { log } from "console";



export default function ProductList() {
  return (
    <section>
      {
        productList.map(item => {
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