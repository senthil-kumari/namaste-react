import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemCategory from "./ItemCategory";
import { ITEM_CATEGORY_TYPE } from "../utils/constants";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  if (resData === null) return <div>Loading data...</div>;
  const { name } = resData?.data?.cards[2]?.card?.card.info;

  const itemCards =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const itemCategory = itemCards.filter(
    (item) => item.card.card["@type"] === ITEM_CATEGORY_TYPE
  );

  return (
    <div className="my-5 mx-auto w-3/4">
      <h2 className="font-bold text-lg">{name}</h2>
      {itemCategory.map((category) => {
        return <ItemCategory data={category.card.card} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
