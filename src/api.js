
const geoApiOptions = {
	method: 'GET',
	headers: {
		//get apo key from OpenWeatherMap
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

const GEO_API_URL= "https://wft-geo-db.p.rapidapi.com/v1/geo";

const WEATHER_API_URL="https://api.openweathermap.org/data/2.5"
//get apo key from  RapidAPI
const WEATHER_API_KEY=""

export {geoApiOptions,GEO_API_URL,WEATHER_API_URL,WEATHER_API_KEY}
