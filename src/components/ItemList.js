import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  const itemsToShow = items.filter((item) => item.card.hideRestaurantDetails);
  return (
    <div className="m-2">
      {itemsToShow.map((item) => {
        const { name, id, isVeg, price, description, imageId, defaultPrice } =
          item.card.info;
        return (
          <div className="flex m-2 py-3 border-b-2 relative">
            <div className="w-9/12">
              <div> {isVeg ? "🥗" : "🍗"}</div>
              <div key={id} className="font-bold text-sm text-slate-800">
                {name}
              </div>
              <div className="text-xs font-bold">
                ₹ {price ? price / 100 : defaultPrice / 100}
              </div>
              <div className="text-xs text-slate-600">{description}</div>
            </div>
            <div className="w-3/12 ">
              <img
                className="w-32 h-28 rounded-md"
                src={CDN_URL + imageId}
                alt="dish image"
              />{" "}
            </div>
            <div className="absolute bottom-0 right-20">
              <button className="bg-white text-green-600 font-bold text-xs p-2 w-20 rounded-md">
                ADD
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
