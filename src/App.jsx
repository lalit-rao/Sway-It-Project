import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import "./App.css";
import ContactUs from "./components/ContactUs.jsx";
import BlogPage from "./components/BlogPage.jsx";


const App = () => {
    return (
        <>
            <div className="RootDiv">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="ContactUs" element={<ContactUs/>}/>
                        <Route path="BlogPage" element={<BlogPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};

export default App;