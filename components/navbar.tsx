import UserIcon from "./usericon";
import CartCount from "./cartcount";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex flex-row justify-between h-25 items-center color-gray bg-neutral-200 w-screen border-1 fixed top-0 z-10">
      <UserIcon />
      <h1 className="
        text-xl font-bold
        sm:text-2xl
        md:text-3xl
        lg:text-4xl">Online Shop</h1>
      <Link href='/cart'>
        <CartCount />
      </Link>
    </header>
  );
}