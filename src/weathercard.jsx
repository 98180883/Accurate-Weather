import locationIcon from "./location.png";
import "./weathercard.css";
import air from "./air.png"
import humidity from "./humidity.png"
import pressure from "./pressure.png"
import windDirection from "./wind-direction.png"
import visibillity from "./visibillity.png"
import fellslike from "./fellslike.png"
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
    <div id="weather">
   <div className={`weatherinfo-container ${getBackgroundColor()}`}>
      <p>Date of Forecast: {currentdate}</p>
      <p><img src={locationIcon} alt="Location Icon" className="location-icon" width="10" height="10" />{city}</p>


      <p id="temp">{weather.main.temp.toFixed(0)}°C / {convert(weather.main.temp).toFixed(0)}°F </p> 
     
      <p>{weather.weather[0].main}</p>
      </div>



<div id="weatherinfo">
          <p id="feels-like"><img src={fellslike}/><br />Feels like {weather.main.feels_like.toFixed(0)}°C / {convert(weather.main.feels_like).toFixed(0)}°F</p>
      <p><img src={humidity}/><br />Humidity <br />{weather.main.humidity}%</p>
      <p><img src={pressure}/>< br/>Pressure <br />{weather.main.pressure} hPa</p>

      <p><img src={air}/>< br/>Wind speed <br />{weather.wind.speed} m/s</p>
      <p><img src={windDirection}/>< br/>Direction<br />{weather.wind.deg}°</p>
       <p><img src={visibillity}/><br />Visibillity <br />{weather.visibility/1000} km</p>
        
      </div>
  </div>
  );
}

export default WeatherCard;
