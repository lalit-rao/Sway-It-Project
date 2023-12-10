import "./ContactUsSection2.css"
import {chat, cs2Image, letter, phone, location, yt, music, twitter, istg, playButton} from "../assets/images/index.js";

const ServingSection = () => {
    return (
        <>
            <div className="bigger-container-cus2">
            <div className="big-container-cus2">
        <div className="flexing-container-cus2">
            <div className="flexing-container-image-cus2">
                <img src={cs2Image} alt=""/>
            </div>
            <div className="flexing-container-text-cus2">
                <p className="flexing-container-text-1-cus2">
                    Get in touch with us and tell us how can we help you.
                </p>
                <p className="flexing-container-text-2-cus2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <div className="container-cus2-small">
                <div className="container-cus2-small-icon">
                    <img src={playButton} alt=""/>
                </div>
                <div className="container-cus2-small-text">
                    <p className="container-cus2-small-text-1">See How</p>
                </div>
            </div>
            </div>

        </div>
            <section id="animated-box-cus2">
                <div className="cc-row-cus2">
                    <div className="cc-column-cus2">
                        <div className="cc-card-cus2">
                            <p><i className="fa fa-user fa-lg"></i></p>
                            <div className="cc-card-image-cus2">
                                <img src={location} alt="youtube"/>
                            </div>
                            <p className="cc-card-name-cus2">Location</p>
                            <div className="counterCards-text-cus2">
                                <p className="counterCards-text-inside-cus2">Jln Cempaka Wangi No 22, Jakarta - Indonesia.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cc-column-cus2">
                        <div className="cc-card-cus2">
                            <p><i className="fa fa-check fa-lg"></i></p>
                            <div className="cc-card-image-cus2">
                                <img src={letter} alt="youtube"/>
                            </div>
                            <p className="cc-card-name-cus2">Email Us</p>
                            <div className="counterCards-text-cus2">
<p className="counterCards-text-inside-cus2">hello@yourdomain.tld</p>
                            </div>
                        </div>
                    </div>

                    <div className="cc-column-cus2">
                        <div className="cc-card-cus2">
                            <p><i className="fa-solid fa-store fa-lg"></i></p>
                            <div className="cc-card-image-cus2">
                                <img src={phone} alt="youtube"/>
                            </div>
                            <p className="cc-card-name-cus2">Call Us</p>
                            <div className="counterCards-text-cus2">
<p className="counterCards-text-inside-cus2">+(62)21 2002-2012</p>
                            </div>
                        </div>
                    </div>

                    <div className="cc-column-cus2">
                        <div className="cc-card-cus2">
                            <p><i className="fa-solid fa-face-smile fa-lg"></i></p>
                            <div className="cc-card-image-cus2">
                                <img src={chat} alt="youtube"/>
                            </div>
                            <p className="cc-card-name-cus2">Chat Us</p>
                            <div className="counterCards-text-cus2">
<p className="counterCards-text-inside-cus2">Let’s Talk For Business Enquiry or Endorsement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
                <section>
                    <div className="contactUs-text-cus2">
                        <p className="contactUs-text-1-cus2">Follow Our Social Media</p>
                    </div>
                    <div className="contactUs-socialIcons-cus2">
                        <div className="contactUs-socialIcons-small-cus2">
                            <img src={yt} alt=""/>
                        </div>
                        <div className="contactUs-socialIcons-small-cus2">
                            <img src={istg} alt=""/>
                        </div>
                        <div className="contactUs-socialIcons-small-cus2">
                            <img src={twitter} alt=""/>
                        </div>
                        <div className="contactUs-socialIcons-small-cus2">
                            <img src={music} alt=""/>
                        </div>
                    </div>
                </section>
                </div>
        </>
    );
};

export default ServingSection;