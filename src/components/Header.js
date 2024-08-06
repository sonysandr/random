import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

//Header Component
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("Header render");

  useEffect(()=>{
    console.log("useEffect hook is called");
  },[btnName])

  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo image" />
      </div>
      {/* NavItems */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
             btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
