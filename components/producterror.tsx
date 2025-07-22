export default function ProductError() {
  return (
    <div className='w-full h-full flex flex-col justify-center align-center items-center'>
      <div className="flex flex-col justify-start">
        <div className='text-xl md:text-2xl mr-5'>Loading failed :(</div>
        <div className='text-sm md:text-s mr-5 text-lg mt-7'>Please refresh the page</div>
      </div>
    </div>
  );
}