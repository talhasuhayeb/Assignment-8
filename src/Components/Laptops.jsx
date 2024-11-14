import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";

const Laptops = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        (product) => product.category === category
      );
      setProduct(filteredByCategory);
    } else {
      setProduct(data);
    }
  }, [category, data]);
  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {product.map((gadgets) => (
        <Cards key={gadgets.product_id} gadgets={gadgets} />
      ))}
    </div>
  );
};

export default Laptops;
