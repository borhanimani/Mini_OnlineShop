import Link from "next/link"

export default function NotFound() {
  return (
    <div className='w-full h-full flex flex-col justify-center align-center items-center'>
      <div className="flex flex-col justify-start">
        <div className='text-xl md:text-6xl mr-5'>404-The page not found :(</div>
        <Link href={'/'} className='text-sm md:text-s mr-5 text-blue-600 mt-7'>Click here to redirect to the home page</Link>
      </div>
    </div>
  );
}