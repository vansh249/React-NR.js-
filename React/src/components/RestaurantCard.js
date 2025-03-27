import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[200px] h-[510px] bg-[rgba(239,236,229,255)] rounded-lg hover:bg-[#d9d6ce]">
      <img
        className="rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <h4 className="=res-ratings font-medium">{avgRating}</h4>
      <h4 className="est-time">{sla?.slaString}</h4>
      <h4 className="pricefortwo font-medium">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
