import { useState } from "react";


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
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={handleLogin}>{loginStatus}</button>
            </ul>
        </div>
    </div>
}

export default Header;