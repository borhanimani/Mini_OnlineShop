import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CategoryComponent } from '@/utils/project-types';
import { ChangeEvent, useState } from 'react';

export default function CategoryFilter({ list, onCategoryChange }: CategoryComponent) {
  const [selectValue, setSelectValue] = useState('');

  const setValue = (value: SelectChangeEvent): void => {
    const newValue = value.target.value;
    onCategoryChange(newValue);
    setSelectValue(newValue);
  }

  return (
    <FormControl className='w-3/10' variant="standard">
      <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={selectValue}
        onChange={setValue}
        label="Category"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {
          list.map(item => {
            return (
              <MenuItem value={item}>{item}</MenuItem>
            );
          })
        }
      </Select>
    </FormControl >
  );
}