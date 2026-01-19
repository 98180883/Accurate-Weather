import { useEffect, useState } from 'react'
import Search from './search.jsx'
import WeatherCard from './weathercard.jsx'
import Aqihandler from './aqi.jsx'
import Searchedhist from './searchhistory.jsx'
import "./App.css";

function App() {
   const Api_Key = import.meta.env.VITE_WEATHER_API_KEY;   

   
 const[city, setCity] = useState("")
const[weather , setWeather] = useState(null) //for api data
const [error, setError] = useState("")
const [aqierror, setaqiError] = useState("")
const[loading ,setLoading] =useState("")
 const[aqi , setaqi] = useState(null)
const[coord,setcoord]= useState(null)
 const[lastcity , setlastcity] = useState(null)



useEffect(() => {
  const savedCity = localStorage.getItem("lastcity")
  if(savedCity){
    setlastcity(savedCity)
  }
} ,[])


const handleSearch = async () => {
  
 try {
    setError("");
setWeather(null);
 setaqi(null);
 setaqiError(null);
setLoading("Loading Weather Info Please Wait!");
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
 
 //aqi search 
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

 
  return (
  <div className="app-root">
     <div className="weather-container">
     
     <Search city ={city} setCity={setCity} onSearch={handleSearch}/>
{weather && !aqi  && (<button className = "aqi-btn" onClick={Aqisearch}>👉Get AQI Info</button>)}
 
  {loading && <p className='loading'>{loading} </p>}

      {!loading && error && <p className='error'>{error}</p>}

      {weather &&
      <WeatherCard weather={weather} city={city} />  
      }
{aqi && (
  <Aqihandler aqi={aqi}/>
)}
{aqierror && <p className="aqierror"> {aqierror}</p>}

{lastcity && <Searchedhist lastcity={lastcity} setlastcity={setlastcity}/>}
    
   </div>
   <footer>
    Weather Application Developed By Dipanjan Karmakar
    </footer>
    </div>
  )

}
export default App
