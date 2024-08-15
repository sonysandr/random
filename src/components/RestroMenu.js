// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestroMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await data.json();

  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, city, avgRating, cuisines, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card || {};
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name} </h1>
      <span>({totalRatingsString})</span>

      <h3>{cuisines.join(", ")}</h3>
      <span>
        {city} - Rating {avgRating}
      </span>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.finalPrice / 100 ||
                item.card.info.defaultPrice / 100 ||
                item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestroMenu;
