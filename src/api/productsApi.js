const getProducts = () => {
  const getAllProducts = fetch('https://dummyjson.com/products?limit=30')
  .then(res => res.json())
  .then(data => {
    return data.products;
  })
  return getAllProducts;
};

export default getProducts;