import { useEffect, useState } from 'react'
import Search from './search.jsx'
import WeatherCard from './weathercard.jsx'
import Aqihandler from './aqi.jsx'
import Searchedhist from './searchhistory.jsx'
import Forecast from "./forecast.jsx";
import bg2 from './bg2.jpg';
import "./App.css";




function App() {
   const Api_Key = import.meta.env.VITE_WEATHER_API_KEY;   

   
 const[city, setCity] = useState("")
const[weather , setWeather] = useState(null) 
const [error, setError] = useState("")
const [aqierror, setaqiError] = useState("")
const[loading ,setLoading] =useState("")
 const[aqi , setaqi] = useState(null)
const[coord,setcoord]= useState(null)
 const[lastcity , setlastcity] = useState(null)

/*7 day forecast */ 
const [forecast, setForecast] = useState(null);
const [forecastError, setForecastError] = useState("");

useEffect(() => {
  const savedCity = localStorage.getItem("lastcity")
  if(savedCity){
    setlastcity(savedCity)
  }
} ,[])

/*weather search*/
const handleSearch = async () => {
  
 try {
    setError("");
setWeather(null);
 setaqi(null);
 setaqiError(null);
setLoading("Loading Weather Info Please Wait!");
setForecast(null);
setForecastError("");
const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}&units=metric`)
if(!response.ok) {throw new Error("City Not Found")}

const data = await response.json();
setWeather(data);
setcoord(data.coord);
setlastcity(data.name);
localStorage.setItem("lastcity" , data.name)
setLoading("");
 }
catch(err){
  setError("Data Not found");
  setLoading("");

}
 }
 
 /*aqi search*/ 
const Aqisearch = async () => {
  if(!coord) return ;
 try {
    setaqiError("");
setaqi(null);
const aqiresponse = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.lon}&appid=${Api_Key}`)
if(!aqiresponse.ok) {throw new Error("AQI Data Not Found")}

const aqidata = await aqiresponse.json();
setaqi(aqidata);

 }
catch(err){
  setaqiError("AQi Data Not found");

}
 }
useEffect(() => {
  if (coord) {
    Aqisearch();
  }
}, [coord]);

 /*forecast search*/ 
const fetchForecast = async () => {
  if (!coord) return;

  try {
    setForecastError("");

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${Api_Key}`
    );

    if (!response.ok) {
      throw new Error("Forecast not found");
    }

    const data = await response.json();

    //keeping one forecast per day 
    const dailyForecast = data.list.filter((_, index) => index % 8 === 0);

    setForecast(dailyForecast.slice(0,7));
  } catch (err) {
    setForecastError("Weather forecast not found");
  }
};

// load during weather search
useEffect(() => {
  if (coord) {
    fetchForecast();
  }
}, [coord]);


  return (
  <div className="app-root"
 
      style={{
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}>
  <h1>Get Accurate Weather Details & AQI information</h1>
     <div className="weather-container">
     
     <Search city ={city} setCity={setCity} onSearch={handleSearch}/>
{aqi && (
  <Aqihandler aqi={aqi}/>
)}
{aqierror && <p className="aqierror"> {aqierror}</p>}

  {loading && <p className='loading'>{loading} </p>}

      {!loading && error && <p className='error'>{error}</p>}
<div className='weather-forecast'>
      {weather &&
      <WeatherCard weather={weather} city={city} /> 
      }
      
 {weather && forecast && <Forecast forecast={forecast} />}
{forecastError && <p className="error">{forecastError}</p>}
</div>

 

{lastcity && <Searchedhist lastcity={lastcity} setlastcity={setlastcity}/>}
    
   </div>
   <footer>
  © 2026 Dipanjan Karmakar • Weather & AQI App • Background Image generated from : <a href="https://www.freepik.com/free-photo/starry-night-sky-pattern-sparkle-image_11306718.htm">Image by rawpixel.com on Freepik</a>
</footer>
    </div>
  )

}
export default App
