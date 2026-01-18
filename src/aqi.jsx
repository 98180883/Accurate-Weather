import "./aqi.css"
function Aqihandler({aqi}) {

const AqiDescription = (aqi) => {
  if (aqi== 1) return "Good";
  if (aqi == 2) return "Fair";
  if (aqi == 3) return "Moderate";
if (aqi == 4) return "Poor";
  if (aqi == 5) return "VeryPoor";

};
const air = aqi.list[0].main.aqi;
return (
<div className='aqi-info'>
    <h3>AQI : {air}</h3>
    <p className={`Aqibanner ${AqiDescription(air)}`}> Air Quality : {AqiDescription(air)}</p>
    <p className="AQI-Note">NOTE : Our AQI parameter has range from 0-5 where 0 means Excellent & 5 indicates Very-Poor Air Quality </p>
    </div>

)
}

export default Aqihandler;