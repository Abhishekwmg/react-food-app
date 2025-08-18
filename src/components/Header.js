import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Header = () => {

    const [loginStatus, setLoginStatus] = useState('Login')

    const data = useContext(UserContext);
    console.log(data);

    function handleLogin() {
        setLoginStatus(loginStatus === "Login" ? "Logout" : "Login")
    }

    return <div className="flex justify-between shadow-md mb-4">
        <div className="logo-container">
            <img className="w-32" src="assets/food-logo.png" alt="food-logo" />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                <button className="login" onClick={handleLogin}>{loginStatus}</button>
            </ul>
        </div>
    </div>
}

export default Header;