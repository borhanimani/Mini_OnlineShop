import CircularProgress from '@mui/material/CircularProgress';

export default function ProductLoading() {
  return (
    <div className='w-full h-full flex flex-row justify-center align-center items-center'>
      <div className='text-xl md:text-2xl mr-2'>Loading Product</div>
      <CircularProgress size="2em" />
    </div>
  );
}