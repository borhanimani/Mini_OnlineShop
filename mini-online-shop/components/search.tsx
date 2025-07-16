import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <div className='flex flex-row items-center h-10 w-2/8 relative'>
      <SearchIcon className='w-1/10 absolute' sx={{ color: "rgba(87, 86, 86, 1)" }} />
      <input id="search-input" className='h-full w-full pl-6 absolute border-2 border-stone-500 rounded-xl focus:border-blue-600 focus:border-3 focus:outline-none' type="text" placeholder="Search" />
    </div>
  );
}