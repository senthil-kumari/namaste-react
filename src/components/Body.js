import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { resList } from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1864464&lng=72.9754676&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const resData = await data.json();
    const exactData =
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(exactData);
    setFilteredRestaurant(exactData);
  };

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
            setRestaurantList(filteredList);
          }}
        >
          Show top rated
        </button>
      </div>
      <div className="res-card-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
