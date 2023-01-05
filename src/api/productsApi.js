const getProducts = () => {
  const getAllProducts = fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price,images,description')
  .then(res => res.json())
  .then(data => {
    return data.products;
  })
  return getAllProducts;
};

export default getProducts;