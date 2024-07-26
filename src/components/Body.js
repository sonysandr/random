import RestroCard from "./RestroCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react";

// Body
const Body = () => {
  // state variable

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  //   const arr = useState(resList);
  //  the above line is basically
  // const listOfRestaurants =arr[0];
  // const setListOfRestaurants = arr[1];

  // normal js variable
  //   let listOfRestaurants = [
  //     {
  //       info: {
  //         id: "671928",
  //         name: "KFC",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",

  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 4.2,
  //         deliveryTime: 40,
  //       },
  //     },
  //     {
  //       info: {
  //         id: "671967",
  //         name: "Dominos",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",

  //         costForTwo: "₹400 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 4.6,
  //         deliveryTime: 41,
  //       },
  //     },
  //     {
  //       info: {
  //         id: "671909",
  //         name: "Chicking",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",

  //         costForTwo: "₹788 for two",
  //         cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
  //         avgRating: 3.9,
  //         deliveryTime: 7,
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="search"> Search</div>

      {/* Rated Restaurtant filter button */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            console.log(filteredList);
            setListOfRestaurants(filteredList);
          }}
          onMouseOver={() => {
            console.log("mouse over");
          }}
        >
          Rated Restaurants
        </button>
      </div>

      {/* restro container */}
      <div className="res-container">
        {/* RestroCard */}
        {/* <RestroCard resData={resList[2]} /> */}

        {listOfRestaurants.map((item) => {
          return <RestroCard key={item.info.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
