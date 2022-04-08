import userIcon from '../assets/img/fi_users.svg'
import settingIcon from '../assets/img/fi_settings.svg'
import calendarIcon from '../assets/img/fi_calendar.svg'
import { Navigate, useNavigate } from 'react-router-dom'

export default function ListMobil({ car }) {
    const push = useNavigate();
    return (
        <>
            <div className="container-sm">
                <div className="hasil-pencarian my-4">
                    {car!==undefined ? car.map((data) => (
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
                                    4 Orang
                                </p>
                                <p className="card-text" id="tipe">
                                    <img src={settingIcon} alt="setting" className='me-2' />
                                    Manual
                                </p>
                                <p className="card-text" id="tahun">
                                    <img src={calendarIcon} alt="calendar" className='me-2' />
                                    Tahun 2020
                                </p>
                                <div className="d-flex">
                                    <button className='btn btn-success w-100' onClick={() => push("/cars/"+data.id)}>Pilih Mobil</button>
                                </div>
                            </div>
                        </div>
                    )) : <Navigate to='/'/>}
                </div>
            </div>
        </>
    )
}