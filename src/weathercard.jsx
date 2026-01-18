import locationIcon from "./location.png";
import "./weathercard.css";

function WeatherCard({weather,city}) {
  
  // date 
  const dt = new Date();
  const date = dt.getDate();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  
let currentdate = (month+1) + "/" + (date) + "/" + (year);

// tempconverter 
const convert = (temp) =>  ((9.0/5.0)*temp) +32.0;
 



  const getBackgroundColor = () => {
  if (!weather) return "default";

  const condition = weather.weather[0].main;

  if (condition === "Clear") return "clear";
  
  if (condition === "Clouds") return "cloudy";
  if (condition === "Rain") return "rainy";
if (condition ==="Thunderstorm") return "thunder";
  if (condition === "Snow") return "snowfall";
if (condition === "Smoke") return "smoke";
if (condition === "Haze") return "haze";
if (condition === "Mist") return "mist";
  return "default";
};

  return (
   <div className={`weatherinfo-container ${getBackgroundColor()}`}>

      <p>Date of Forecast: {currentdate}</p>
       <h3><img src = {locationIcon} alt= "location icon" width="20" />City : {weather.name}</h3>
     
      <p>🌡️Temperature: {weather.main.temp.toFixed(0)}°C / {convert(weather.main.temp).toFixed(0)}°F</p>
      
      <p>🤒Feels like: {weather.main.feels_like.toFixed(0)}°C / {convert(weather.main.feels_like).toFixed(0)}°F</p>

      <p>💧Humidity: {weather.main.humidity}%</p>
      <p>⚖️Pressure: {weather.main.pressure} hPa</p>

      <p>🌬️Wind speed: {weather.wind.speed} m/s</p>
      <p>🧭Wind direction: {weather.wind.deg}°</p>
      <p>☁️Overall: {weather.weather[0].main}</p>
      
    </div>
  );
}

export default WeatherCard;
