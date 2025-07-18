'use client'

import { useCartStore } from "@/store/useCartStore";

export default function CartCount() {
  const listLength: number = useCartStore((state) => state.list).length;

  return (
    <>
      <div className='flex flex-row mr-15 text-lg items-center gap-1'>
        Cart
        <div className="flex justify-center items-center rounded-full border-1 w-7 h-7 bg-orange-700 text-white" >{listLength}</div>
      </div>
    </>
  );
}