import RestroCard, { withOpenNowLabel } from "./RestroCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

// Body
const Body = () => {
  // state variable

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestroCardOpen = withOpenNowLabel(RestroCard);

  console.log("Body rendered : ", listOfRestaurants);

  //   useEffect hook
  useEffect(() => {
    console.log("useEffect hook called after the initial Body render");
    fetchData();
  }, []);

  const fetchData = async () => {
    // here we are using api from swiggy and using cors extention
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("path test");
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    // updating both state variables with the api data
    // optional chaining in js used to better our code
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // onlinestatus using custom hook
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div>
        <h1>Opps.. Looks like you're offline. Check internet connection</h1>
      </div>
    );

  // ternary operator for better code
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search Functionality */}

      <div className="flex filter ">
        <div className="p-4 m-4 ">
          <input
            type="search"
            className="px-4 py-2 mr-4 border rounded-lg "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-400 rounded-lg"
            onClick={() => {
              // filter the cards and update the ui
              //
              console.log(searchText);
              const searchRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurant(searchRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <div className="flex items-center p-4 m-4">
          {/* Filter  functionality with rating */}
          <button
            className="px-4 py-2 bg-gray-400 rounded-lg "
            onClick={() => {
              // filter logic here
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.6
              );
              console.log(filteredList);
              setFilteredRestaurant(filteredList);
            }}
            onMouseOver={() => {
              console.log("mouse over");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      {/* restro container */}
      <div className="flex flex-wrap ">
        {/* RestroCard */}

        {filteredRestaurant.map((item) => {
          // key should be in the parent
          return (
            <Link
              className="restro-link"
              key={item.info.id}
              to={"/restaurants/" + item.info.id}
            >
              {/* if isOpen true use RestroCardOpen otherwise use RestroCard comnponent */}

              {item.info.isOpen ? (
                <RestroCardOpen resData={item} />
              ) : (
                <RestroCard resData={item} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
