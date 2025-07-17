import UserIcon from "./usericon";

export default function Navbar() {
  return (
    <header className=" flex flex-row justify-between h-1/8 items-center color-gray bg-neutral-200 w-full sticky top-0 z-10">
      <UserIcon />
      <h1 className="font-bold text-4xl">Online Shop</h1>
      <div className='flex flex-row mr-15 text-lg items-center gap-1'>
        Cart
        <div className="flex justify-center items-center rounded-full border-1 w-7 h-7 bg-orange-700 text-white" >3</div>
      </div>
    </header>
  );
}