import SearchIcon from '@mui/icons-material/Search';
import { grey, red } from '@mui/material/colors';

export default function Search() {
  return (
    <div className=''>
      <SearchIcon sx={{color: "rgb(58, 58, 58)"}}/>
      <input id="search-input" className="" type="text" placeholder="Search" />
    </div>
  );
}