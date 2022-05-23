import { PRODUCTS } from "./PRODUCTS";

//selector for Type -- given type as argument, this function should return the products with that type from the PRODUCTS array
export const selectProductsByType = (type) => {
  return PRODUCTS.filter(
    (product) => product.type === type && !product.seasonal
  );
};

//selector for Top / Category of Products -- this function returns the categories of products for the Products Page
export const selectTopProducts = () => {
  return PRODUCTS.filter((product) => product.type === "top");
};

//selector for Seasonal Products -- this function returns Seasonal Products only
export const selectSeasonalProducts = () => {
  return PRODUCTS.filter((product) => product.seasonal);
};

//selector for Jerky -- this function selects Jerky products
export const selectJerky = () => {
  return PRODUCTS.filter(
    (product) => !product.seasonal && product.type === "jerky"
  );
};

//selector for Cheese -- this function selects Cheese products
export const selectCheese = () => {
  return PRODUCTS.filter(
    (product) => !product.seasonal && product.type === "cheese"
  );
};

export const selectSalmon = () => {
  return PRODUCTS.filter(
    (product) => !product.seasonal && product.type === "salmon"
  );
};
