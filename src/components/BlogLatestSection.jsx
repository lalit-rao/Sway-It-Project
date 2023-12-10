import {
    BlogImage1,
    BlogImage2,
    BlogImage3,
    BlogImage4,
    BlogImage5,
    istg,
    music,
    twitter,
    yt
} from "../assets/images/index.js";
import "./BlogLatestSection.css"

const BlogLatestSection = () => {
    return (
        <div>
            <p className="BlogText">Latest Blog</p>
            <div className="blog-container-main-1-bls">
                <div className="blog-container-small-1-bls">
                    <div className="image-container-1-bls">
                        <img src={BlogImage1} alt=""/>
                        <div className="overlay-text-bls">
                            <h1>Lalit</h1>
                        </div>
                    </div>

                </div>
                <div className="blog-container-small-1-bls">
                    <div className="image-container-1-bls">
                        <img src={BlogImage2} alt=""/>
                    </div>
                </div>
                <div className="blog-container-small-1-bls">
                    <div className="image-container-1-bls">
                        <img src={BlogImage3} alt=""/>
                    </div>
                </div>
                <div className="blog-container-small-1-bls">
                    <div className="image-container-1-bls">
                        <img src={BlogImage4} alt=""/>
                    </div>
                </div>
            </div>
            <div className="blog-container-main-2-bls">
                <div className="blog-container-small-2-bls">
                    <div className="image-container-2-bls">
                        <img src={BlogImage5} alt=""/>
                    </div>
                </div>
            </div>
            <div className="button-blog-bls">
                    <p className="button-text-bls">
                        Explore More
                    </p>
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
    );
};

export default BlogLatestSection;