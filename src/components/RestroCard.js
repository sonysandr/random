import { CDN_URL } from "../utils/constants";

// styleCard
const styleCard = {
  backgroundColor: "yellow",
  color: "blue",
  textAlign: "center",
};

// RestroCard Component
const RestroCard = (props) => {
  // destructuring the props
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className=" p-4 m-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-400    ">
      <img
        className="rounded-lg res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="py-2 text-lg font-bold " style={styleCard}>
        {name}
      </h3>

      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>{sla.deliveryTime} minutes ⏱️</h4>
      <h4>{costForTwo} 💰</h4>
    </div>
  );
};

// HOC

// input RestroCard ==> RestroCardOpenNow

export const withOpenNowLabel = (RestroCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-2 text-white bg-black rounded-lg">Open Now</label>
        <RestroCard {...props}/>
      </div>
    );
  };
};

export default RestroCard;
