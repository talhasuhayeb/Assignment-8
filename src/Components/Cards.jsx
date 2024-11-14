import React from "react";

const Cards = ({ gadgets }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    description,
    rating,
  } = gadgets || {};
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-12">
      <figure>
        <img
          className="w-80 h-40 object-contain"
          src={product_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p className="font-medium text-gray-500">{description}</p>
        <p className="font-medium text-gray-500">Price: ${price}</p>
        <p className="font-medium text-gray-500">Rating: {rating}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
