import * as React from 'react';
import { useNavigate } from 'react-router-dom'
//import {useCars} from '../Layout/Layout'
import { useCars } from '../../App';
import axios from 'axios'

import InputTipeDriver from "./InputTipeDriver"
import PilihTanggal from "./PilihTanggal"
import InputWaktuJemput from "./InputWaktuJemput"
import InputPenumpang from "./InputPenumpang"

export default function FormCariMobil({ zIndex, onClick, position, disabled, role }) {
    const push = useNavigate();
    const { setCars } = useCars();

    const [formInputData, setFormInputData] = React.useState({
        tipeDriver: '',
        tanggal: null,
        waktuJemput: '',
        penumpang: ''
    })

    const handleInputChange = (e) => {
        const inputFieldValue = e.target.value;
        const inputFieldName = e.target.name;
        const newInputValue = {
            ...formInputData,
            [inputFieldName]: inputFieldValue
        }
        //console.log(newInputValue);
        setFormInputData(newInputValue);
    }
    const handleInputDateChange = (e) => {
        const newInputValue = {
            ...formInputData,
            tanggal: e?.toISOString()
        }
        //console.log(newInputValue);
        setFormInputData(newInputValue);
    }

    const handleFormSubmit = async (e) => {
        try {
            const { data } = await axios.get("https://rent-cars-api.herokuapp.com/customer/car");
            setCars(data)
            push('/cars')
        } catch (error) {
            console.log(error)
        }
        e.preventDefault();
    }

    return (
        <>
            <div className="container-sm" style={{ zIndex: `${zIndex}`, position: `${position}` }}>
                <div className="card cari-mobil shadow p-3">
                    <div className="my-2 mx-1" onClick={onClick}>
                        <p>Tipe Driver</p>
                        <InputTipeDriver handleInputChange={handleInputChange} value={formInputData.tipeDriver} disabled={disabled} />
                    </div>
                    <div className="my-2 mx-1" onClick={onClick}>
                        <p>Tanggal</p>
                        <PilihTanggal handleInputChange={handleInputDateChange} value={formInputData.tanggal} disabled={disabled} />
                    </div>
                    <div className="my-2 mx-1" onClick={onClick}>
                        <p>Waktu Jemput/Ambil</p>
                        <InputWaktuJemput handleInputChange={handleInputChange} value={formInputData.waktuJemput} disabled={disabled} />
                    </div>
                    <div className="my-2 mx-1" onClick={onClick}>
                        <p>Jumlah Penumpang (optional)</p>
                        <InputPenumpang handleInputChange={handleInputChange} value={formInputData.penumpang} disabled={disabled} />
                    </div>
                    <div className="my-2 mx-1">
                        {role==="edit"? (
                            <button type="submit" onClick={handleFormSubmit} className="btn btn-outlined-blue" disabled={disabled}>Edit</button>
                            ) : <></>}
                        {!role ? <button type="submit" onClick={handleFormSubmit} className="btn btn-success" disabled={disabled}>Cari Mobil</button> : <></>}
                    </div>
                </div>
            </div>
        </>
    )
}