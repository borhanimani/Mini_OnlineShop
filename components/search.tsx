import SearchIcon from '@mui/icons-material/Search';
import { SearchComponent } from '@/utils/project-types';
import { useState } from 'react';

export default function Search({ onSearchChange }: SearchComponent) {
  const [textValue, setTextValue] = useState('');

  const setValue = (value: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = value.target.value;
    onSearchChange(newValue);
    setTextValue(newValue);
  }
  
  return (
    <div className='
    flex flex-row items-center h-10 w-9/10 relative
    xl:w-4/12'>
      <SearchIcon className='w-1/10 absolute left-2' sx={{ color: "rgba(87, 86, 86, 1)" }} />
      <input id="search-input"
        className='h-full w-full pl-9 absolute border-2 border-stone-500 rounded-xl text-lg focus:border-blue-600 focus:border-3 focus:outline-none'
        type="text"
        placeholder="Search"
        value={textValue}
        onChange={setValue} />
    </div>
  );
}