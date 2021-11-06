import React from "react";
import data from "./data";
import Items from "./Items";
const Products = () => {
  return (
    <>
      {data.map((value, index) => {
        return (
          <Items
            key={index}
            id={index}
            img={value.image}
            title={value.title}
            price={value.price}
            des={value.description}
            rating={value.rating.rate}
            count={value.rating.count}
            item={value}
            // itemdelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default Products;
