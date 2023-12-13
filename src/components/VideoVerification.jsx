import './VideoVerification.css'
import {loginLogoPage, videoVerify} from "../assets/images/index.js";


const VideoVerification = () => {
    return (
        <div className="Login-main-container">
            <div className="login-logo">
                <img src={loginLogoPage} alt="Logo"/>
            </div>
            <div className="video-verification-form">
                <img src={videoVerify} alt=""/>
            </div>
            <button className="video-verification-form-button">
                <a href="/OTPVerification">hjghjhjghgfghjgt</a>
            </button>
        </div>
    );
};

export default VideoVerification;