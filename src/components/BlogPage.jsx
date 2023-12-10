import Navbar from "./Navbar.jsx";
import HeroBlogPage from "./HeroBlogPage.jsx";
import BlogLatestSection from "./BlogLatestSection.jsx";
import Footer from "./Footer.jsx";
import "./BlogPage.css";

const BlogPage = () => {
    return (
        <div className="relative">
            <section>
                <HeroBlogPage/>
            </section>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section>
                <BlogLatestSection/>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default BlogPage;