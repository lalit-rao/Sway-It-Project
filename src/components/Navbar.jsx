import {useRef, useState} from "react";
// import {FaBars, FaTimes} from "react-icons/fa";
import "../components/Navbar.css";
import {logo, menu} from "../assets/images/index.js";
import {Link} from "react-router-dom";


function Navbar() {
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    const [scrollOpacity, setScrollOpacity] = useState(0)

    const maxScroll = 500
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const opacity = scrollY / maxScroll

        setScrollOpacity(opacity)
    })


    return (

        <header style={{backgroundColor: `rgba(42 35 73 / ${scrollOpacity})`,}}>
            <a href="/">
                <img className="logoContainer"
                     src={menu}
                     alt="logo"
                     height={25}
                />
            </a>

            <nav ref={navRef}>
                <Link to="/">Home</Link>
                <Link to="/">About Us</Link>
                <a href="/">
                <img className="logoContainer"
                     src={logo}
                     alt="logo"
                     height={60}
                />
            </a>
                 <Link to="/Blogs">Blog</Link>
                <Link to="/Contacts">Contact us</Link>
            </nav>
            <a href="/">
                <button className="button-login">
                    <a href="/Login">Login</a>
                </button>
            </a>
            {/*<button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars/>
            </button>*/}
        </header>


    );

}

export default Navbar;