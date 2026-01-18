






/*function hourlydata{city}

try {
    setError("");
setWeather(null);
setLoading("Loading Weather Info Please Wait!");
const response = await fetch(`https://pro.openweathermap.org/data/2.5/hourly?{city}&appid=f387edd25f4a7dde732b62cfd22abc86`)
if(!response.ok) {throw new Error("City Not Found")}

const data = await response.json();
setWeather(data);
setLoading(false);
 }
catch(err){
  setError("Data Not found");
  setLoading("");
}
 }*/


