import {BlogHero} from "../assets/images/index.js";
import "./HeroBlogPage.css"

const HeroBlogPage = () => {
    return (
       <div className="hero-hbp">
            <div className="hero-text-hbp">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="hero-text-big-hbp">Blog</p>
                <p className="hero-text-small-hbp">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className="hero-image-hbp">
                <img src={BlogHero} alt=""/>
            </div>
       </div>
    );
};

export default HeroBlogPage;