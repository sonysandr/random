// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestroMenu = () => {
  const { resId } = useParams();
  // console.log(resId); 

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, city, avgRating, cuisines, totalRatingsString, areaName } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  // @type has @ which is not valid, thus we wrap it in ["@type"]
  //remember .card is same as .["card"]
  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="my-6 text-2xl font-bold">{name} </h1>

      <h3 className="font-bold ">{cuisines.join(", ")}</h3>

      {/* Categories Accordion = each categories is an accordion */}
      {categories.map((category, index) => {
        return (
          // Controlled component
          <RestaurantCategory
            key={category?.card.card.title}
            data={category?.card?.card}
            showItems={index == showIndex ? true : false}
            setShowIndex = {()=>setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestroMenu;
// data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.title
// when this page loads =>  we make an api call => we use hooks for this
