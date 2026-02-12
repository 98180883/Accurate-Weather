import "./forecast.css"
function Forecast({ forecast }) {
  return (
     
    <div className="forecast-container">

    
 
      {forecast.map((day, index) => (
        <div key={index} className="forecast-row">
          <span>
            {new Date(day.dt * 1000).toLocaleDateString("en-US", {
              weekday: "short"
            })}
            
          </span>

<img 
  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} 
  alt="weather icon"
/>


          <span id="temperature">{Math.round(day.main.temp)}°C </span>

          <span> {day.weather[0].main}</span>
  
        </div>
      ))}
    </div>
  );
}

export default Forecast;
