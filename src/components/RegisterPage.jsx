import {loginLogoPage} from "../assets/images/index.js";
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="Login-main-container">
            <div className="login-logo">
                <img src={loginLogoPage} alt="Logo"/>
            </div>
            <div className="register-form">
                <form>
                    <div className="login-text">
                        <p className="login-text-1">Sign in to account</p>
                        <p className="login-text-2">Enter your email & password to login</p>
                    </div>
                    <div className="user-box">
                        <label className="user-box-text-1">Email Address</label>
                        <input className="user-box-box-1" required="" name="email" placeholder="Test@gmail.com"
                               type="text"/>
                    </div>
                    <div className="user-box">
                        <label className="user-box-text-1">Password</label>
                        <input className="user-box-box-1" required="" name="password" placeholder="*********"
                               type="password"/>
                    </div>
                    <div className="user-box">
                        <label className="user-box-text-1">Phone Number</label>
                        <input className="user-box-box-1" required="" name="password" placeholder="*********"
                               type="tel"/>
                    </div>
                    <div className="remember-box">
                        <label>
                            <input type="checkbox"/>Agree with
                            <a className="remember-box-text-1" href="/">privacy policy</a>
                        </label>
                    </div>
                    <div className="button-box">
                        <a className="remember-box-text-2" href="/VideoVerification">Create Account</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
