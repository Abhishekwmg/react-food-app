import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const [loginStatus, setLoginStatus] = useState('Login')

    function handleLogin() {
        setLoginStatus(loginStatus === "Login" ? "Logout" : "Login")
    }

    return <div className="header">
        <div className="logo-container">
            <img className="logo" src="assets/food-logo.png" alt="food-logo" />
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <button className="login" onClick={handleLogin}>{loginStatus}</button>
            </ul>
        </div>
    </div>
}

export default Header;