import {loginLogoPage, smchosen} from "../assets/images/index.js";
import './SocialMediaChosen.css'

const SocialMediaChosen = () => {
    return (
        <div className="Login-main-container">
            <div className="login-logo">
                <img src={loginLogoPage} alt="Logo"/>
            </div>
            <div className="video-verification-form">
                <img src={smchosen} alt=""/>
            </div>
            <div className="button-smcc">
                <a href="/SocialMediaChosen">Proceed</a>
            </div>
        </div>
    );
};

export default SocialMediaChosen;