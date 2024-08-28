import { useState, useEffect, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//Header Component
const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // console.log("Header render");

  useEffect(() => {
    // console.log("useEffect hook is called");
  }, [btnName]);

  // custom hook for online status
  const onlineStatus = useOnlineStatus();

  // Context data
  const data = useContext(UserContext);
  console.log(data)
  const {loggedInUser} = data;

// subscribing to the store using the Selector useSelector() hook

const cartItems = useSelector((store)=> store.cart.items);
console.log(cartItems);
  
  return (
    // Header
    <div className="flex justify-between mb-2 shadow-lg sm:bg-yellow-100 md:bg-green-200">
      {/* Logo */}
      <div className="flex ">
        <Link to="/">
          <img className="w-56" src={LOGO_URL} alt="logo image" />
        </Link>
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
          <li className="text-xl font-bold ">
            <Link to="/cart">
            Cart ({cartItems.length})
            </Link>
          </li>

          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold ">{loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
