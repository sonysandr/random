import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data ,showItems ,setShowIndex } = props;

//  const [showItems, setShowItems] = useState(false);

  const handleClick = () =>{
    // console.log("clicked");
    // setShowItems(!showItems);
    
    // this function is passed as a prop
    setShowIndex();
  }

  return (
    <div className="w-6/12 p-4 mx-auto shadow-lg my-4bg-gray-300">
      {/* Accordion Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="text-lg font-bold ">
          {data.title}({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Acoordion Data */}
      <div>
        {showItems ? <ItemList items={data.itemCards} /> :null }
        
       
      </div>
    </div>
  );
};

export default RestaurantCategory;
