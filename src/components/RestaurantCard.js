import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { id, name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    props.resObj?.info;
  return (
    <div className="w-[170px] m-2 p-2   rounded-lg	hover:p-3">
      <img
        className="w-52 h-36 p-1 rounded-xl"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant food image"
      />
      <p className="text-base font-bold text-ellipsis overflow-hidden whitespace-nowrap	">
        {name}
      </p>
      <h4 className="text-sm">⭐{avgRating}</h4>
      <h4 className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
        {cuisines.join(", ")}
      </h4>
      <h4 className="text-sm">{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
