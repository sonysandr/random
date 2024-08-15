import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

//Header Component
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("Header render");

  useEffect(() => {
    console.log("useEffect hook is called");
  }, [btnName]);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo image" />
      </div>
      {/* NavItems */}
      <div className="nav-items">
        <ul>
          {/* using unicode for the green dot and red dot */}
          <li>Online Status : {onlineStatus ? "\u{1F7E2}" : "\u{1F534} "}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>

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
