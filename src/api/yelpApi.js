import { REACT_APP_YELP_API } from '@env';

const yelpUri = 'https://api.yelp.com/v3';

const getRestaurants = (lat, lon) => {
  const restaurantData = fetch(`${yelpUri}/businesses/search?latitude=${lat}&longitude=${lon}&term=restaurants&radius=500&open_now=true&sort_by=best_match&limit=2`,{
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${REACT_APP_YELP_API}`,
      'Content-Type': 'application/json',
    }
  })
  .then(res => res.json())
  .then(data => {
    return data.businesses;
  })

  return restaurantData
}

export default getRestaurants;