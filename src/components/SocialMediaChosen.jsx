import {loginLogoPage, smchosen} from "../assets/images/index.js";
import './SocialMediaChosen.css'
import {Link} from "react-router-dom";

const SocialMediaChosen = () => {
    return (
        <div className="Login-main-container">
            <div className="login-logo">
                <img src={loginLogoPage} alt="Logo"/>
            </div>
            <div className="video-verification-form-smcc">
                <img src={smchosen} alt=""/>
            </div>
            <div className="button-smcc">
                <Link to="/">Proceed</Link>
            </div>
        </div>
    );
};

export default SocialMediaChosen;