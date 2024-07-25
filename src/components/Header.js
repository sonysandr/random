import { LOGO_URL } from "../utils/constants";

//Header Component
const Header = () => {
    return (
      <div className="header">
        {/* Logo */}
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo image"
          />
        </div>
        {/* NavItems */}
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

export default Header;
