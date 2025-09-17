import { useState } from "react";
import ItemList from "./ItemList";

const ItemCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div key={title} className="m-4 bg-gray-100  shadow-md">
      <div
        className="font-bold py-2 m-2 flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {title} ({itemCards.length})
        </span>
        {showItems ? <span>&#8963;</span> : <span>&#x2304;</span>}
      </div>
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default ItemCategory;
