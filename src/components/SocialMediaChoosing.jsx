import './SocialMediaChoosing.css';
import {
    appy,
    beReal,
    facebook,
    instagram,
    linkedin,
    loginLogoPage,
    smchoosing,
    snapchat,
    tiktok,
    twitter2,
    youtube
} from "../assets/images/index.js";

const SocialMediaChoosing = () => {
    return (
        <div className="Login-main-container">
            <div className="login-logo">
                <img src={loginLogoPage} alt="Logo"/>
            </div>
            <div className="main-container-smc">
                <div className="smc-image-container">
                    <img src={smchoosing} alt=""/>
                </div>
                <div className="main-container-choose">
                    <div className="smc-choose-container-small">
                        <img src={facebook} alt=""/>
                    </div>
                    <div className="smc-choose-container-small">
                        <img src={instagram} alt=""/>
                    </div>
                    <div className="smc-choose-container-small">
                        <img src={twitter2} alt=""/>
                    </div>
                    <div className="smc-choose-container-small">
                        <img src={tiktok} alt=""/>
                    </div>
                    <div className="smc-choose-container-small">
                        <img src={snapchat} alt=""/>
                    </div>
                    <div className="smc-choose-container-small">
                        <img src={beReal} alt=""/>
                    </div>
                    <div className="smc-choose-container-small">
                        <img src={linkedin} alt=""/>
                    </div>
                    <div className="smc-choose-container-small">
                        <img src={appy} alt=""/>
                    </div>
                    <div className="smc-choose-container-small">
                        <img src={youtube} alt=""/>
                    </div>
                </div>
            </div>
            <div className="button-smc">
                <a href="/SocialMediaChosen">Proceed</a>
            </div>
        </div>
    );
};

export default SocialMediaChoosing;