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
    
    <p className={`Aqibanner ${AqiDescription(air)}`}>Air Quality: {air} -  {AqiDescription(air)}</p>
  
    </div>

)
}

export default Aqihandler;