import {loginLogoPage, otpVerify} from "../assets/images/index.js";
import './OTPVerification.css'

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
                <a href="/SocialMediaChoosing">hjghjhjghgfghjgt</a>
            </button>
        </div>
    );
};

export default OtpVerification;