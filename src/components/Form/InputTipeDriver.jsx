import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function InputTipeDriver({handleInputChange, value, disabled}) {
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl variant='outlined' size='small' fullWidth disabled={disabled}>
        <InputLabel id="demo-simple-select-label">Pilih Tipe Driver</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Pilih Tipe Driver"
          name='tipeDriver'
          value={value}
          onChange={handleInputChange}
          required
        >
          <MenuItem value={'Dengan Sopir'}>Dengan Sopir</MenuItem>
          <MenuItem value={'Tanpa Sopir (Lepas Kunci)'}>Tanpa Sopir</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
