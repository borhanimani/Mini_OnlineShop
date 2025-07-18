'use client'

import { useCartStore } from "@/store/useCartStore";
import { CartItemArray } from "@/utils/project-types";
import { useEffect } from "react";


export default function CartList() {
  const list: CartItemArray = useCartStore((state) => state.list);
  const deletItem = useCartStore((state) => state.deleteItem);
  const increaseItem = useCartStore((state) => state.increaseItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);

  useEffect(() => {
    console.log(list);

  }, [list])
  return (
    <>
      {list.length == 0 ? (
        <p>No item selected yet.</p>
      ) : (
        <section>
          <table>
            <thead>
              <tr>
                <th>Number</th>
                <th>Title</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <th>{index + 1}</th>
                      <th>{item.title}</th>
                      <th>{item.description}</th>
                      <th>
                        <button onClick={() => decreaseItem(item.id)}>-</button>
                        {item.quantity}
                        <button onClick={() => increaseItem(item.id)}>+</button>
                      </th>
                      <th>{item.price}</th>
                      <th><button onClick={() => deletItem(item.id)}>delete</button></th>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </section>
      )
      }
    </>
  );
}