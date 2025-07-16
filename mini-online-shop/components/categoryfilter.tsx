import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Categories } from '@/utils/project-types';

export default function CategoryFilter({ list }: Categories) {
  return (
    <FormControl className='w-3/10' variant="standard">
      <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        // value={age}
        // onChange={handleChange}
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
    </FormControl>
  );
}