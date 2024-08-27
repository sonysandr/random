import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  const { items } = props;
  
  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.name}
            className="flex justify-between pb-2 m-2 border-b-2 border-black"
          >
            <div className="w-[790px] h-[160px] bg-gray-100    ">
              <div className="flex justify-start">
                {/* Name */}
                <span className="font-bold ">{item.card.info.name}</span>
                {/* Price */}

                <span>
                  - ₹
                  {item.card.info.defaultPrice
                    ? item.card.info.defaultPrice / 100
                    : item.card.info.finalPrice || item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.defaultPrice / 100}
                </span>
              </div>
              <div className="">
                {/* Description */}
                <p className="text-xs text-left">
                  {item.card.info.description}
                </p>
              </div>
            </div>
            <div>
              {/* product image */}
              <img
                src={CDN_URL + item.card.info.imageId}
                alt=""
                className="size-40"
              />
            </div>
          </div>
        );
      })}

      {/* [0].card.info.description */}
    </>
  );
};

export default ItemList;
