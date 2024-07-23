import React from "react";
import ReactDOM from "react-dom/client";

// React element1
const game = <h1>Game ON</h1>;

// React element2
const bingo = <div>{game}</div>;

// React functional components
const HeadingComp = function () {
  return <>{bingo}</>;
};

// js variable
const data = 10000;

const Heading = () => (
  <div id="king" className="queen">
    {/* 3 ways to call a functional component in JSX */}
    {HeadingComp()}
    <HeadingComp/>
    <HeadingComp></HeadingComp>
    {100 + data}
    {console.log("queen of console")}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
