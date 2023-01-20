
export const getProfiles = () => {
  const getAllProfiles = fetch('https://my-json-server.typicode.com/LaurieLonecrow/RN_MVP/users')
  .then(res => res.json())
  .then(data => {
    return data;
  })
  return getAllProfiles;
};

