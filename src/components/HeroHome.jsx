import "./HeroHome.css"
import {heroImage} from "../assets/images/index.js";

function HeroHome() {
    return (
        <div className="hero">
            <div className="hero-text">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="hero-text-big">Be Imagine,<br/>Be Artistic, and <br/> let's Engage</p>
                <p className="hero-text-small">Pellentesque vivamus molestie efficitur viverra  hendrerit in pretium semper natoque</p>
            </div>
            <div className="hero-image">
                <img src={heroImage} alt=""/>
            </div>
        </div>
    )
}

export default HeroHome;