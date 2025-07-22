'use client'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

import { useCartStore } from "@/store/useCartStore";
import { getItemTotalPrice, getTotalPrice } from "@/utils/cart-functions";
import { CartItemArray } from "@/utils/project-types";

export default function CartList() {
  const list: CartItemArray = useCartStore((state) => state.list);
  const deletItem = useCartStore((state) => state.deleteItem);
  const increaseItem = useCartStore((state) => state.increaseItem);
  const decreaseItem = useCartStore((state) => state.decreaseItem);

  return (
    <>
      {list.length == 0 ? (
        <p className='
        pt-80 flex justify-center text-xl
        md:text-2xl
        lg:text-3xl'>No product added yet.</p>
      ) : (
        <section className="flex flex-col justify-between w-4/4 h-4/4 mt-0 border-1">
          <div className='overflow-x-scroll w-auto mt-24'>
            <table className="w-full mt-0 border-b-1 border-stone-300">
              <thead className=" text-stone-100 bg-stone-500">
                <tr className=" sticky top-0 z-10 border-1 h-20 bg-stone-500">
                  <th className="text-xl"> <div className='w-80 md:w-auto'>Number</div></th>
                  <th className="text-xl"><div className='w-50'>Title</div></th>
                  <th className="text-xl"><div className='w-50'>Description</div></th>
                  <th className="text-xl"><div className='w-40'>Quantity</div></th>
                  <th className="text-xl "><div className='w-30'>Price</div></th>
                  <th className="text-xl" colSpan={2}><div className='w-40'>Total Price</div></th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((item, index) => {
                    return (
                      <tr className={index % 2 == 0 ? "bg-white h-15 mt-24" : "bg-stone-300 "} key={item.id}>
                        <th className="font-normal text-lg">{index + 1}</th>
                        <th className="font-normal text-lg w-1/4">
                          <div className='overflow-y-scroll w-full h-35 text-left pl-3 mr-5'>
                            {item.title}
                          </div>
                        </th>
                        <th className="font-normal w-60 md:w-1/4 text-lg max-w-xs mr-10">
                          <div className='overflow-y-scroll h-35 text-left pl-3'>
                            {item.description}
                          </div>
                        </th>
                        <th className="font-normal text-lg mr-10 flex flex-row w-40 h-35 justify-center items-center ">
                          <Button onClick={() => decreaseItem(item.id)} variant="contained"
                            sx={{ borderRadius: '50%', fontSize: '20px', minWidth: 'unset', padding: '17px', marginRight: '8px', width: '20px', height: '20px', backgroundColor: 'rgba(185, 0, 0, 1)' }}>-</Button>
                          <p className='w-9'>
                            {item.quantity}
                          </p>
                          <Button onClick={() => increaseItem(item.id)} variant="contained"
                            sx={{ borderRadius: '50%', fontSize: '20px', minWidth: 'unset', padding: '17px', marginLeft: '8px', width: '20px', height: '20px' }}>+</Button>
                        </th>
                        <th className="font-normal md:text-2lg"><div className='w-30 font-bold'>{item.price} $</div></th>
                        <th className="font-normal md:text-2lg "><div className='w-30 font-bold'>{getItemTotalPrice(item)} $</div></th>
                        <th className="font-normal md:text-lg">
                          <IconButton aria-label="delete" onClick={() => deletItem(item.id)}><DeleteIcon /></IconButton></th>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="sticky bottom-0 flex flex-row justify-between items-center px-15 py-7 font-bold text-2xl border-5 bg-stone-500 text-stone-100 w-full">
            <div >Total Price:</div>
            <div >{getTotalPrice(list)} $</div>
          </div>
        </section >
      )
      }
    </>
  );
}