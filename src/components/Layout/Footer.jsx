import facebookImg from '../../assets/img/icon_facebook.svg'
import twitterImg from '../../assets/img/icon_twitter.svg'
import instagramImg from '../../assets/img/icon_instagram.svg'
import mailImg from '../../assets/img/icon_mail.svg'
import twitchImg from '../../assets/img/icon_twitch.svg'
import logo from '../../assets/img/logo.svg'

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
                    <a href="-#"><img src={facebookImg} alt="icon_facebook"/></a>
                    <a href="-#"><img src={instagramImg} alt="icon_instagram"/></a>
                    <a href="-#"><img src={twitterImg} alt="icon_twitter"/></a>
                    <a href="-#"><img src={mailImg} alt="icon_mail"/></a>
                    <a href="-#"><img src={twitchImg} alt="icon_twitch"/></a>
                </div>
            </div>
            <div id="copyright">
                <span>Copyright Binar 2022</span>
                <img src={logo} alt="logo"/>
            </div>
        </footer>
    )
}