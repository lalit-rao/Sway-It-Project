import {Fistg, Fmusic, Ftwitter, Fyt, logo} from "../assets/images/index.js";
import "./Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="footer-container-1">
                    <p className="footer-container-1-text-1">Terms of Use</p>
                    <p className="footer-container-1-text-1">Privacy Policy</p>
                    <p className="footer-container-1-text-1">Cookie Policy</p>
                </div>
                <div className="footer-container-2">
                    <a href="/">
                        <img className="logoContainer"
                             src={logo}
                             alt="logo"
                             height={60}
                        />
                    </a>
                </div>
                <div className="footer-container-3">
                    <div className="social-icons">
                        <div className="icon-1">
                            <img src={Fyt} alt=""/>
                        </div>
                        <div className="icon-1">
                            <img src={Fistg} alt=""/>
                        </div>
                        <div className="icon-1">
                            <img src={Ftwitter} alt=""/>
                        </div>
                        <div className="icon-1">
                            <img src={Fmusic} alt=""/>
                        </div>
                    </div>
                    <p className="footer-container-3-text-1">
                        <FontAwesomeIcon icon="fa-solid fa-envelope" style={{color: "#ffffff",}}/>
                        support@yourdomain.tld</p>
                    <p className="footer-container-3-text-1">(456) 785-8585</p>
                </div>
            </div>
            <div className="footer-container-border">
                <p className="footer-container-border-text-1">© 2021 SWAY IT. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;