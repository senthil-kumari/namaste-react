import { useState, useEffect } from "react";
import RestaurantCard, { withVeg } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const VegRestaurant = withVeg(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(RESTAURANT_LIST_API);
    const resData = await data.json();
    const exactData =
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(exactData);
    setFilteredRestaurant(exactData);
  };
  if (!onlineStatus)
    return <div>Looks like you are offline, Go find the internet!!</div>;
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <div className="flex my-5">
        <div className="flex">
          <input
            type="text"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm placeholder='Search for anything...'"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-gray-100 rounded-md px-2 py-1 mx-2 hover:bg-gray-300"
            onClick={() => {
              const searchedItem = restaurantList.filter((res) => {
                const searchFromString = res.info.name.toLowerCase();
                return searchFromString.includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(searchedItem);
            }}
          >
            Search
          </button>
        </div>
        <div className="ml-3">
          <button
            className="bg-gray-100 rounded-md px-2 py-1 mx-2 hover:bg-gray-300"
            onClick={() => {
              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Show top rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.veg ? (
                <VegRestaurant resObj={restaurant} />
              ) : (
                <RestaurantCard resObj={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
