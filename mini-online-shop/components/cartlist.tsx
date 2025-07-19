'use client'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import { useCartStore } from "@/store/useCartStore";
import { getItemTotalPrice, getTotalPrice } from "@/utils/cart-functions";
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
        <p className='pt-80 flex justify-center text-2xl'>No product added yet.</p>
      ) : (
        <section className="flex flex-col justify-between w-full h-7/8 mt-20">
          <table className="w-full border-2 mt-12">
            <thead className="sticky top-20 z-10 h-full text-stone-100 bg-stone-500">
              <tr className=" border-1 h-20 text-red bg-stone-500">
                <th className="">Number</th>
                <th className="">Title</th>
                <th className="">Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th colSpan={2}>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((item, index) => {
                  return (
                    <tr className={index % 2 == 0 ? "bg-white h-15 " : "bg-stone-300 h-15 "} key={item.id}>
                      <th className="font-normal">{index + 1}</th>
                      <th className="font-normal">{item.title}</th>
                      <th className="font-normal">{item.description}</th>
                      <th className="font-normal">
                        <Button onClick={() => decreaseItem(item.id)} variant="contained"
                          sx={{ borderRadius: '50%', fontSize: '20px', minWidth: 'unset', padding: '12px', marginRight: '8px', width: '20px', height: '20px', backgroundColor: 'rgba(185, 0, 0, 1)' }}>-</Button>
                        {item.quantity}
                        <Button onClick={() => increaseItem(item.id)} variant="contained"
                          sx={{ borderRadius: '50%', fontSize: '20px', minWidth: 'unset', padding: '12px', marginLeft: '8px', width: '20px', height: '20px' }}>+</Button>
                      </th>
                      <th className="font-normal">{item.price} $</th>
                      <th className="font-normal">{getItemTotalPrice(item)} $</th>
                      <th className="font-normal">
                        <IconButton aria-label="delete" onClick={() => deletItem(item.id)}><DeleteIcon /></IconButton></th>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
          <div className="flex flex-row justify-between items-center px-15 py-7 font-bold text-2xl border-1 w-full bg-stone-500 text-stone-100 sticky top-0 bottom-0">
            <div >Total Price:</div>
            <div >{getTotalPrice(list)} $</div>
          </div>
        </section>
      )
      }
    </>
  );
}