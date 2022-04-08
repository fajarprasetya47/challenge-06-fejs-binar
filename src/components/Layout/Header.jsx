import logo from '../../assets/img/logo.svg'
import carImg from '../../assets/img/img_car.png'
import toggle from '../../assets/img/fi_menu.svg'
import toggleClose from '../../assets/img/fi_close.svg'
import NavToggle from '../../assets/js/nav'

export default function Header({head}) {
    return (
        <header>
            <div className="header-navbar sticky-top">
                <div id="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li><a href="?">Our Service</a></li>
                        <li><a href="?">Why Us</a></li>
                        <li><a href="?">Testimonial</a></li>
                        <li><a href="?">FAQ</a></li>
                        <li><button type="button" className="btn btn-success">Register</button></li>
                    </ul>
                    <div className='nav-toggle-close btn' onClick={NavToggle}>
                        <img src={toggleClose} alt="toggle" />
                    </div>
                </nav>
                <div className='nav-toggle btn' onClick={NavToggle}>
                    <img src={toggle} alt="toggle" />
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
                        <img src={carImg} alt="hero-car" srcSet="" />
                    </> 
                : <div style={{marginBottom:'100px'}}></div>
                }
            </section>
        </header>
    )
}