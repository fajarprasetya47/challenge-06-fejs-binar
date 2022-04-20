import userIcon from '../assets/img/fi_users.svg'
import settingIcon from '../assets/img/fi_settings.svg'
import calendarIcon from '../assets/img/fi_calendar.svg'
import Button from './Button/Button'
import { Navigate, useNavigate } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { setBtnPilihMobil } from '../redux/actions/buttonAction'

export default function ListMobil({ car }) {
    const push = useNavigate();
    const dispatch = useDispatch();
    
    const detail = useSelector((state)=>state.detailReducer);
    const btn = useSelector((state)=>state.buttonReducer);

    useEffect(()=>{
        dispatch(setBtnPilihMobil());
    },[dispatch]);

    return (
        <>
            <div className="container-sm">
                <div className="hasil-pencarian my-4">
                    {car!==undefined ? car?.map((data) => (
                        <div key={data.id} className="card">
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="card-img px-4 mb-2">
                                    <img src={data.image} alt="car" style={{ width: '100%', height: '100%' }} />
                                </div>
                                <p className="card-text" id="namaTipeMobil">{data.name}/Manual</p>
                                <p className="card-text fw-bold" id="hargaMobil">Rp.{data.price?.toLocaleString('id-ID')}/hari</p>
                                <p className="card-text" id="detail">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <p className="card-text" id="capacity">
                                    <img src={userIcon} alt="user" className='me-2' />
                                    {detail.capacity}
                                </p>
                                <p className="card-text" id="tipe">
                                    <img src={settingIcon} alt="setting" className='me-2' />
                                    {detail.tipeMobil}
                                </p>
                                <p className="card-text" id="tahun">
                                    <img src={calendarIcon} alt="calendar" className='me-2' />
                                    {detail.tahun}
                                </p>
                                <div className="d-flex">
                                    <Button className='btn btn-success w-100' onClick={() => push("/cars/"+data.id)} placeholder={btn.placeholder}/>
                                </div>
                            </div>
                        </div>
                    )) : <Navigate to='/' />}
                </div>
            </div>
        </>
    )
}