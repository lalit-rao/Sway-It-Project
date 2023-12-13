import {manSun, tickSign} from "../assets/images/index.js";
import "./AboutSection.css";

const AboutSection = () => {
    return (
        <>
            <div className="AboutSection">
                <div className="About-image">
                    <img src={manSun} alt=""/>
                </div>
                <div className="About-text">
                    <p className="About-text-1">WHO AM I</p>
                    <p className="About-text-2">Drawing attention to your brand</p>
                    <p className="About-text-3">Pellentesque vivamus molestie efficitur viverra facilisi blandit.
                        Fringilla posuere metus parturient si suscipit elit magnis. Auctor penatibus convallis nulla
                        porta hendrerit in pretium semper natoque.</p>
                </div>
            </div>
            <div className="cards-boxes-as">
                <div className="card-box-as">
                    <div className="card-box-heading-as">
                        <div className="card-box-heading-child-as card-box-heading-as-icon">
                            <img className="icon-card-box-as" src={tickSign} alt=""/>
                        </div>
                        <div className="card-box-heading-as-text">
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card-box-content-as">
                        <p>Suscipit elit magnis. Auctor penatibus convallis nulla porta hendrerit in pretium semper
                            natoque.</p>
                    </div>
                </div>
                <div className="card-box-as">
                    <div className="card-box-heading-as">
                        <div className="card-box-heading-child-as card-box-heading-as-icon">
                            <img className="icon-card-box-as" src={tickSign} alt=""/>
                        </div>
                        <div className="card-box-heading-as-text">
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card-box-content-as">
                        <p>Suscipit elit magnis. Auctor penatibus convallis nulla porta hendrerit in pretium semper
                            natoque.</p>
                    </div>
                </div>
                <div className="card-box-as">
                    <div className="card-box-heading-as">
                        <div className="card-box-heading-child-as card-box-heading-as-icon">
                            <img className="icon-card-box-as" src={tickSign} alt=""/>
                        </div>
                        <div className="card-box-heading-as-text">
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card-box-content-as">
                        <p>Suscipit elit magnis. Auctor penatibus convallis nulla porta hendrerit in pretium semper
                            natoque.</p>
                    </div>
                </div>
                <div className="card-box-as">
                    <div className="card-box-heading-as">
                        <div className="card-box-heading-child-as card-box-heading-as-icon">
                            <img className="icon-card-box-as" src={tickSign} alt=""/>
                        </div>
                        <div className="card-box-heading-as-text">
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card-box-content-as">
                        <p>Suscipit elit magnis. Auctor penatibus convallis nulla porta hendrerit in pretium semper
                            natoque.</p>
                    </div>
                </div>
                <div className="card-box-as">
                    <div className="card-box-heading-as">
                        <div className="card-box-heading-child-as card-box-heading-as-icon">
                            <img className="icon-card-box-as" src={tickSign} alt=""/>
                        </div>
                        <div className="card-box-heading-as-text">
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card-box-content-as">
                        <p>Suscipit elit magnis. Auctor penatibus convallis nulla porta hendrerit in pretium semper
                            natoque.</p>
                    </div>
                </div>
                <div className="card-box-as">
                    <div className="card-box-heading-as">
                        <div className="card-box-heading-child-as card-box-heading-as-icon">
                            <img className="icon-card-box-as" src={tickSign} alt=""/>
                        </div>
                        <div className="card-box-heading-as-text">
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="card-box-content-as">
                        <p>Suscipit elit magnis. Auctor penatibus convallis nulla porta hendrerit in pretium semper
                            natoque.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSection;