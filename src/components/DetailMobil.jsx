import userIcon from '../assets/img/fi_users.svg'
import settingIcon from '../assets/img/fi_settings.svg'
import calendarIcon from '../assets/img/fi_calendar.svg'
import { useEffect } from "react";
import { useState } from "react";
import { Navigate } from 'react-router-dom';

export default function DetailMobil({ car, id }) {
    const [carId, setCarId] = useState([]);
    useEffect(() => {
        const dataCar = car?.find(item => item.id === Number(id));
        setCarId(dataCar);
    }, [id, car])
    return (
        <>
            {car !== undefined ? (
                <div className="container-sm">
                    <div className="car-detail my-4">
                        <div className="car-detail-desc">
                            <div className="card p-1">
                                <div className="card-body">
                                    <div id="desc1">
                                        <p className="fw-bold">Tentang Paket</p>
                                        <p>Include</p>
                                        <ul className="text-muted ps-3">
                                            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                            <li>Sudah termasuk bensin selama 12 jam</li>
                                            <li>Sudah termasuk Tiket Wisata</li>
                                            <li>Sudah temasuk pajak</li>
                                        </ul>
                                        <p>Exclude</p>
                                        <ul className="text-muted ps-3">
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                        </ul>
                                    </div>
                                    <div id="desc2">
                                        <p className="fw-bold">Refund, Reschedule, Overtime</p>
                                        <ul className="text-muted ps-3">
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-detail-checkout">
                            <div className="card p-1">
                                <div className="card-body">
                                    <div className="card-img p-3">
                                        <img src={carId.image} alt="carDetail" className='px-5 w-100' />
                                    </div>
                                    <div className='mb-4'>
                                        <p className="fw-bold mb-1">{carId.name}/Manual</p>
                                        <div className="d-flex small text-muted">
                                            <div className="me-2">
                                                <p id="capacity">
                                                    <img src={userIcon} alt="user" className='me-2 w-25' />
                                                    4 Orang
                                                </p>
                                            </div>
                                            <div className="me-2">
                                                <p id="tipe">
                                                    <img src={settingIcon} alt="setting" className='me-2 w-25' />
                                                    Manual
                                                </p>
                                            </div>
                                            <div className="me-2">
                                                <p id="tahun">
                                                    <img src={calendarIcon} alt="calendar" className='me-2' />
                                                    Tahun 2020
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p>Total</p>
                                        <p className="fw-bold">Rp.{carId.price?.toLocaleString("id-ID")}</p>
                                    </div>
                                    <div className="d-flex">
                                        <button className="btn btn-success w-100">Lanjutkan Pembayaran</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success'>Lanjutkan Pembayaran</button>
                    </div>
                </div>

            ) : <Navigate to='/'/>}
        </>
    )
}