import './App.css';
import Search from './components/search/search';
import Forecast from './components/forecast/forecast';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY,WEATHER_API_URL } from './api';
import { useState } from 'react';


function App() {
  const [currentWeather,setCurrentWeather] = useState(null);
  const [forecastWeather,setForecast] = useState(null);
  const handleOnSearchChange = (searchData) =>{
    // console.log(searchData);
    // 解构赋值 destructuring assignment
    const [lat,lon] = searchData.value.split(' ')
    // console.log(lat);
    // open weather api
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch,forecastWeatherFetch])
      .then(async(response)=>{
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()

        setCurrentWeather({city:searchData.label,...weatherResponse});
        setForecast({city:searchData.label,...forecastResponse});
      })
      .catch((err)=>{
        console.log(err);
      })

    console.log(currentWeather);
    console.log(forecastWeather);
  }
  return (
    <div className="container">
     <Search onSearchChange = {handleOnSearchChange} />
     {currentWeather&&<CurrentWeather data={currentWeather}/>}
     {forecastWeather&&<Forecast prop={forecastWeather}/>}
    </div>
  );
}

export default App;
