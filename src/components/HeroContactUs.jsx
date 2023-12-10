import './HeroContactUs.css';
import {ContactUsHero} from "../assets/images/index.js";

const HeroContactUs = () => {
    return (
          <div className="hero-cus">
              <div className="hero-image-cus">
                <img src={ContactUsHero} alt=""/>
            </div>
            <div className="hero-text-cus">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="hero-text-big-cus">Contact Us</p>
                <p className="hero-text-small-cus">We would love to hear from you.</p>
            </div>

        </div>
    );
};

export default HeroContactUs;