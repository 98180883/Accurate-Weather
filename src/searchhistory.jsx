import "./searchedhistory.css";

function Searchedhist({lastcity , setlastcity}){
  return(
    <div>
    <p className="lastsearch" >
      Last Searched City : {lastcity}
 
         <button className="clearsearch" onClick={()=> setlastcity("")}>Clear History</button>
              </p>
  </div>
  )
}

export default Searchedhist;