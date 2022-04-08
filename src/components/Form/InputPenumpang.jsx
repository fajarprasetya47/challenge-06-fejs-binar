import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

export default function InputPenumpang({handleInputChange, value, disabled}) {
    return (
        <Box sx={{ minWidth: 200 }}>
            <TextField
                size='small'
                id="outlined-textarea"
                type='number'
                label="Jumlah Penumpang"
                placeholder='Jumlah Penumpang'
                name='penumpang'
                value={value}
                onChange={handleInputChange}
                disabled={disabled}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <PeopleAltOutlinedIcon />
                        </InputAdornment>
                    ),
                    inputMode: 'numeric',
                    pattern: '[0-9]*'
                }}
                variant="outlined"
                fullWidth
            />
        </Box>
    );
}
