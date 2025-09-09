import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { id, name, cuisines , costForTwo, avgRating, cloudinaryImageId} = props.resObj?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL+cloudinaryImageId}
        alt="restaurant food image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>

    </div>
  );
};

export default RestaurantCard;