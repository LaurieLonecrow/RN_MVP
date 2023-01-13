import { REACT_APP_OPEN_WEATHER_API } from '@env';

const getWeatherData = () => {
  const weatherData = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=37.540726&lon=-77.436050&appid=${REACT_APP_OPEN_WEATHER_API}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    return data});

  return weatherData;
}

export default getWeatherData;
