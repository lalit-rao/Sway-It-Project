import './VideoVerification.css'
import {loginLogoPage, videoVerify} from "../assets/images/index.js";
import {Link} from "react-router-dom";


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
                <Link to="/OTPVerification">hjghjhjghgfghjgt</Link>
            </button>
        </div>
    );
};

export default VideoVerification;