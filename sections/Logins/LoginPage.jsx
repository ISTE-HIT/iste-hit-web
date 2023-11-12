import '../../styles/login.css'
import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa';

const LoginPage = () => {
    return (
        <div className="container md:mt-12 mt-24">
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Enter email id/Number" required />
                    <i className="bx bxs-user"></i>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Enter Password" required />
                    <i className="bx bxs-lock-alt"></i>
                </div>
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" />Remember me
                    </label>
                    <a href="#"> Forgot password?</a>
                </div>
                <div>
                    <br />
                    <button type="submit" className="btn">
                        Login
                    </button>
                </div>

                <div className="register">
                    <br />
                    <br />
                    <p>
                        Dont have an account? <a href="#"> Register </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
