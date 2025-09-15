import { useState, useEffect } from "react";
import { RESTAURANT_INFO_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(RESTAURANT_INFO_API + resId);
    const resData = await res.json();

    setResInfo(resData);
  };
  return resInfo;
};

export default useRestaurantMenu;
