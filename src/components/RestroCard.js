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

  const { cloudinaryImageId, name, cuisines, avgRating, sla,  costForTwo } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 style={styleCard}>{name}</h3>

      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestroCard;
