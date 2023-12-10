import Navbar from "./Navbar.jsx";
import HeroCus from "./HeroContactUs.jsx";
import ContactUsContactSection from "./ContactUsContactSection.jsx";
import ContactUsSection2 from "./ContactUsSection2.jsx";
import Footer from "./Footer.jsx";

const ContactUs = () => {
    return (
        <div className="relative">
            <section>
                <HeroCus/>
            </section>
            <section className="Navbar">
                <Navbar/>
            </section>
            <section>
                <ContactUsContactSection/>
            </section>
            <section>
                <ContactUsSection2/>
            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default ContactUs;