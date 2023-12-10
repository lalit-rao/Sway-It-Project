import "./ServingSection.css"
import {ladyCircle, playButton} from "../assets/images/index.js";

const ServingSection = () => {
    return (
        <>
            <div className="main-container-ss">
        <div className="flexing-container-ss">
            <div className="flexing-container-text-ss">
                <p className="flexing-container-text-1-ss">
                    We are ready<br/> to serve you<br/> differently
                </p>
                <p className="flexing-container-text-2-ss">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
            </div>
            <div className="flexing-container-image-ss">
                <img src={ladyCircle} alt=""/>
            </div>
        </div>
            <div className="container-ss-small">
                <div className="container-ss-small-icon">
                    <img src={playButton} alt=""/>
                </div>
                <div className="container-ss-small-text">
                    <p className="container-ss-small-text-1">See How</p>
                </div>
            </div>
                </div>
        </>
    );
};

export default ServingSection;