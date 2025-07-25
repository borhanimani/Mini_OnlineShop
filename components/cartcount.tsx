'use client'

import { useCartStore } from "@/store/useCartStore";
import { getAllProductsCount } from "@/utils/cart-functions";

export default function CartCount() {
  const listLength: number = getAllProductsCount(useCartStore((state) => state.list));

  return (
    <>
      <div className='
      flex flex-row items-center gap-1 text-s mr-4
      md:mr-5
      lg:mr-10'>
        Cart
        <div className="flex flex-row justify-center rounded-full border-1 w-7 h-7 bg-orange-700 text-white" >{listLength}</div>
      </div>
    </>
  );
}