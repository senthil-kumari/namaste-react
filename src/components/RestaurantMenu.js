import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resData = useRestaurantMenu(resId);
  if (resData === null) return <div>Loading data...</div>;
  const { name } = resData?.data?.cards[2]?.card?.card.info;
  let items = "";
  if (
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
      ?.card?.categories
  ) {
    items =
      resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
        ?.card?.card?.categories[0]?.itemCards;
  } else {
    items =
      resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
        ?.card?.card?.itemCards;
  }

  return (
    <div className="menu-container">
      <h2>{name}</h2>
      <ul>
        {items.map((item) => {
          const { name, price, finalPrice, defaultPrice, id } = item.card.info;
          return (
            <li key={id} className="menu-item">
              <div>{name}</div>
              <div>
                {" "}
                Rs.{price / 100 || finalPrice / 100 || defaultPrice / 100}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
