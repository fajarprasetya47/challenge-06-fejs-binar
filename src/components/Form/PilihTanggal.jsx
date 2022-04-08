import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

export default function PilihTanggal({handleInputChange, value, disabled}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Pilih Tanggal"
        name='tanggal'
        value={value}
        onChange={handleInputChange}
        disabled={disabled}
        renderInput={(params) => <TextField size='small' {...params} />}
      />
    </LocalizationProvider>
  );
}
