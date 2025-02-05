import React from "react";
import { CartState } from "../context/CartContext";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      {/* Filter Component */}
      {/* Hero Section  */}

      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default Home;
