import UserIcon from "./usericon";
import CartCount from "./cartcount";

export default function Navbar() {
  return (
    <header className=" flex flex-row justify-between h-1/8 items-center color-gray bg-neutral-200 w-full sticky top-0 z-10">
      <UserIcon />
      <h1 className="font-bold text-4xl">Online Shop</h1>
      <CartCount />
    </header>
  );
}