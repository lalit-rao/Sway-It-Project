import {loginLogoPage} from "../assets/images/index.js";
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="Login-main-container">
            <div className="login-logo">
                <img src={loginLogoPage} alt="Logo"/>
            </div>
            <div className="login-form">
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
                    <div className="remember-box">
                        <label>
                            <input type="checkbox"/>
                            <a className="remember-box-text-1" href="">Remember me</a>
                        </label>
                        <div className="forget-box">
                            <a href="/">Forget Password</a>
                        </div>
                    </div>
                    <div className="button-box">
                        <a href="/">Sign In</a>
                    </div>
                    <div className="under-button">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p className="under-button-text">Don't have an account? <a href="/Register">Create Account</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
