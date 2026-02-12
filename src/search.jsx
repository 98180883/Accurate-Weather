import "./search.css";


function Search({ city, setCity, onSearch }){
    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      onSearch(); // trigger search
    }
  };
return(

     <div className="upperpart">
  
      <input className="searchinput"
        type ="text"
        placeholder = "Enter City Name"
        value={city}

        onChange ={(e) => setCity(e.target.value)}
            onKeyDown = {handleKeyDown}              //key handler
        
        />
      <button className="searchbtn" onClick={onSearch}>🔍</button>
      <br /><br />
      </div>
)}

export default Search
