export const getProducts = () => {
  const getAllProducts = fetch('https://dummyjson.com/products?limit=30')
  .then(res => res.json())
  .then(data => {
    return data.products;
  })
  return getAllProducts;
};

export const getUsers = () => {
  const getAllUsers = fetch('https://my-json-server.typicode.com/LaurieLonecrow/RN_MVP/users')
  .then(res => res.json())
  .then(data => {
    return data;
  })
  return getAllUsers;
};

