import React, { createContext } from "react";
import { faker } from "@faker-js/faker";

const cart = createContext();

export const CartContext = ({ children }) => {
  faker.seed(100); // Optional: To get consistent data for testing.

  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price()),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  console.log(products);

  return <cart.Provider>{children}</cart.Provider>;
};

export default cart;
