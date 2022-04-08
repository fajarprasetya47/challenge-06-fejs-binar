import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function InputWaktuJemput({handleInputChange, value, disabled}) {
    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth size='small' disabled={disabled}>
                <InputLabel id="demo-simple-select-label">Pilih Waktu</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Pilih Waktu"
                    name='waktuJemput'
                    value={value}
                    onChange={handleInputChange}
                    required
                >
                    <MenuItem value={'08.00'}>08.00 WIB</MenuItem>
                    <MenuItem value={'09.00'}>09.00 WIB</MenuItem>
                    <MenuItem value={'10.00'}>10.00 WIB</MenuItem>
                    <MenuItem value={'11.00'}>11.00 WIB</MenuItem>
                    <MenuItem value={'12.00'}>12.00 WIB</MenuItem>
                    
                </Select>
            </FormControl>
        </Box>
    );
}
