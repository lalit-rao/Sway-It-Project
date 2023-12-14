import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import "./App.css";
import ContactUs from "./components/ContactUs.jsx";
import BlogPage from "./components/BlogPage.jsx";
import LoginPage from "./components/LoginPage.jsx";
import RegisterPage from "./components/RegisterPage.jsx";
import VideoVerification from "./components/VideoVerification.jsx";
import OTPVerification from "./components/OTPVerification.jsx";
import SocialMediaChoosing from "./components/SocialMediaChoosing.jsx";
import SocialMediaChosen from "./components/SocialMediaChosen.jsx";


const App = () => {
    return (
        <>
            <div className="RootDiv">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="Contacts" element={<ContactUs/>}/>
                        <Route path="Blogs" element={<BlogPage/>}/>
                        <Route path="LoginPage" element={<LoginPage/>}/>
                        <Route path="Register" element={<RegisterPage/>}/>
                        <Route path="VideoVerification" element={<VideoVerification/>}/>
                        <Route path="OTPVerification" element={<OTPVerification/>}/>
                        <Route path="SocialMediaChoosing" element={<SocialMediaChoosing/>}/>
                        <Route path="SocialMediaChosen" element={<SocialMediaChosen/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;