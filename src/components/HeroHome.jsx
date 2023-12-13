import "./HeroHome.css"
import {
    girl1,
    girl2,
    img1abv,
    img2abv,
    img3abv,
    imgbigheart,
    imgcomment,
    imgheart,
    imgsmiley,
    imgthumb
} from "../assets/images/index.js";

function HeroHome() {
    return (
        <div className="hero">
            <div className="hero-text">
                <p className="box-1-rex">Be Imagine,</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="box-2-rex">Be Artistic, and</p> <p className="box-3-rex">let's Engage</p>
                <p className="hero-text-small">Pellentesque vivamus molestie efficitur viverra hendrerit in pretium
                    semper natoque</p>
            </div>
            {/*<div className="hero-image">
                <img src={heroImage} alt=""/>
            </div>*/}
            <div className="container">
                <div className="box box-1">
                    <img src={img1abv}/>
                </div>
                <div className="box">
                    <img src={img2abv}/>
                </div>
                <div className="box">
                    <img src={img3abv}/>
                </div>
            </div>
            <div className="container-box-girls">
                <div className="girl1-box">
                    <img src={girl1} alt=""/>
                </div>
                <div className="girl2-box">
                    <img src={girl2} alt=""/>
                </div>
                <div className="itemBox1">
                    <img src={imgbigheart} alt=""/>
                </div>
                <div className="itemBox2">
                    <img src={imgcomment} alt=""/>
                </div>
                <div className="itemBox3">
                    <img src={imgthumb} alt=""/>
                </div>
                <div className="itemBox4">
                    <img src={imgsmiley} alt=""/>
                </div>
                <div className="itemBox5">
                    <img src={imgheart} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default HeroHome;