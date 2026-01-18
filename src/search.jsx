import "./search.css";
import weaicon from "./weather.png";

function Search({ city, setCity, onSearch }){
    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(); // trigger search
    }
  };
return(

     <div className="upperpart">
        <img src = {weaicon} alt="weather-icon" width="30"/> 
       <h3 className="header">Get Accurate Weather Information</h3>
       
      <input className="searchinput"
        type ="text"
        placeholder = "🔍Enter City Name"
        value={city}
        onChange ={(e) => setCity(e.target.value)}
            onKeyDown = {handleKeyDown}              //key handler
        
        />
      <button className="searchbtn" onClick={onSearch}>Search</button>
      <br /><br />
      </div>
)}

export default Search
