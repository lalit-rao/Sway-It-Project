// import LPHero from "./LandingPageHero.jsx";
import Navbar from "./Navbar.jsx";
import HeroHome from "./HeroHome.jsx";
import CounterCards from "./CounterCards.jsx";
import AboutSection from "./AboutSection.jsx";
import ServingSection from "./ServingSection.jsx";
import ContactSection from "./ContactSection.jsx";
import Footer from "./Footer.jsx";
import "./LandingPage.css";

const LandingPage = () => {
    return (
        <div className="relative">
            <section>
                <HeroHome/>
            </section>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section>
                <CounterCards/>
            </section>
            <section>
                <AboutSection/>
            </section>
            <section>
                <ServingSection/>
            </section>
            <section>
                <ContactSection/>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default LandingPage;