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
    // Header
    <div className="flex justify-between mb-2 shadow-lg sm:bg-yellow-100 md:bg-green-200">
      
      {/* Logo */}
      <div className="flex ">
        <img className="w-56" src={LOGO_URL} alt="logo image" />
      </div>
      
      {/* NavItems */}
      <div className="flex items-center ">
        <ul className="flex gap-4 p-4 m-4">
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
          <li>
            <Link to="/groceries">Groceries</Link>
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
