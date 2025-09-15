import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
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
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchedItem = restaurantList.filter((res) => {
                const searchFromString = res.info.name.toLowerCase();
                return searchFromString.includes(searchText.toLowerCase());
              });
              console.log("search", searchedItem);
              setFilteredRestaurant(searchedItem);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            console.log(restaurantList, "restaurantList");
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filteredList, "filteredList");
            setFilteredRestaurant(filteredList);
          }}
        >
          Show top rated
        </button>
      </div>
      <div className="res-card-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resObj={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
