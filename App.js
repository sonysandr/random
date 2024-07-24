import React from "react";
import ReactDOM from "react-dom/client";

// Munchy application Basic wire
/* 
  - Header 
      -Logo
      -NavItems
  - Body
      -Search
      -CardContainer
            -RestroCard
                -img
                -name of the restaurant  -start rating
                -cuisines - delivery time
  - Footer
      -CopyRight
      -Links
      -Contact
  */
// Header Component
const Header = () => {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo-container">
        <img
          className="logo"
          src="https://w7.pngwing.com/pngs/211/245/png-transparent-logo-brand-munchies-by-antonio-food-munchies-food-text-logo-thumbnail.png"
          alt=""
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

// styleCard
const styleCard = {
  backgroundColor: "yellow",
  color: "blue",
  textAlign: "center",
};

// RestroCard Component
const RestroCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0999305149b084847ec05a1d001212f7"
      />
      <h3 style={styleCard}>Burger Plus</h3>
      <h4>Something</h4>
      <h4>South Indian, Continental</h4>
      <h4>4.5 stars</h4>
      <h4>39 mins</h4>
    </div>
  );
};

// Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>

      {/* restro container */}
      <div className="res-container">
        {/* RestroCard */}
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* Body */}
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
