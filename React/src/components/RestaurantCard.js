import {CDN_URL}  from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <h4 className="=res-ratings">{avgRating}</h4>
      <h4 className="est-time">{deliveryTime}</h4>
      <h4 className="pricefortwo">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
