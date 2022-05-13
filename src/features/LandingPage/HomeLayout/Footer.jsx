import { asset } from '../../../assets/asset'

export default function Footer() {
    return(
        <footer>
            <div id="address">
                <div id="addr-addr">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
                <div id="addr-email">binarcarrental@gmail.com</div>
                <div id="addr-phone">081-233-334-808</div>
            </div>
            <div id="nav">
                <ul>
                    <li><a href="?">Our Service</a></li>
                    <li><a href="?">Why Us</a></li>
                    <li><a href="?">Testimonial</a></li>
                    <li><a href="?">FAQ</a></li>
                </ul>
            </div>
            <div id="sosmed">
                Connect with us
                <div class="sosmed-group">
                    <a href="-#"><img src={asset.iconFacebook} alt="icon_facebook"/></a>
                    <a href="-#"><img src={asset.iconInstagram} alt="icon_instagram"/></a>
                    <a href="-#"><img src={asset.iconTwitter} alt="icon_twitter"/></a>
                    <a href="-#"><img src={asset.iconMail} alt="icon_mail"/></a>
                    <a href="-#"><img src={asset.iconTwitch} alt="icon_twitch"/></a>
                </div>
            </div>
            <div id="copyright">
                <span>Copyright Binar 2022</span>
                <img src={asset.logo} alt="logo"/>
            </div>
        </footer>
    )
}