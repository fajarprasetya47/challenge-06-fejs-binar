import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import FormCariMobil from './Form/FormCariMobil';

export default function CariMobil({disabled, role}) {
    const [open, setOpen] = React.useState({
        display: false,
        position: 'static'
    });
    const handleClose = () => {
        const newVal = {
            display: false,
            position: 'static'
        }
        setOpen(newVal);
    };
    const handleToggle = () => {
        const newVal = {
            display: true,
            position: 'relative'
        }
        setOpen(newVal);
    };

    return (
        <>
            <FormCariMobil zIndex={1022} onClick={handleToggle} position={open.position} role={role} disabled={disabled} />
            {!disabled ? 
                <Backdrop
                    sx={{
                        color: '#fff',
                        zIndex: 1020,
                    }}
                    open={open.display}
                    onClick={handleClose}
                >
                </Backdrop>
            : <></>}
        </>
    )
}