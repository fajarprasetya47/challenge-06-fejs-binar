import NavToggle from '../../../assets/js/nav'
import { asset } from '../../../assets/asset'
import { logOut } from "../../../config/redux/actions/authAction"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export default function Header({head}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = async () => {
        try {
            await dispatch(logOut());
            await navigate('/')
        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <div className="header-navbar sticky-top">
                <div id="logo">
                    <img src={asset.logo} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="?">Our Service</a></li>
                        <li><a href="?">Why Us</a></li>
                        <li><a href="?">Testimonial</a></li>
                        <li><a href="?">FAQ</a></li>
                        <li><button type="button" onClick={signOut} className="btn btn-danger">Logout</button></li>
                    </ul>
                    <div className='nav-toggle-close btn' onClick={NavToggle}>
                        <img src={asset.fiClose} alt="fi_close" />
                    </div>
                </nav>
                <div className='nav-toggle btn' onClick={NavToggle}>
                    <img src={asset.fiMenu} alt="fi_menu" />
                </div>
            </div>
            <section id="hero">
                {head==='hero' ?
                    <>
                        <div className="hero-text">
                            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                            <p>
                                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                                terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                                untuk sewa mobil selama 24 jam.
                            </p>
                            <button type="button" className="btn btn-success">Mulai Sewa Mobil</button>
                        </div>
                        <img src={asset.imgCar} alt="hero-car" srcSet="" />
                    </> 
                : <div style={{marginBottom:'100px'}}></div>
                }
            </section>
        </>
    )
}