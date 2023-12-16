import {loginLogoPage, otpVerify} from "../assets/images/index.js";
import './OTPVerification.css'
import {Link} from "react-router-dom";

const OtpVerification = () => {
    return (
        <div className="Login-main-container">
            <div className="login-logo">
                <img src={loginLogoPage} alt="Logo"/>
            </div>
            <div className="video-verification-form">
                <img src={otpVerify} alt=""/>
            </div>
            <button className="otp-verification-form-button">
                <Link to="/SocialMediaChoosing">hjghjhjghgfghjgt</Link>
            </button>
        </div>
    );
};

export default OtpVerification;