import "./searchedhistory.css";

function Searchedhist({lastcity , setlastcity}){
  return(
    <div>
    <p className="lastsearch" >
      Last Searched City : {lastcity}
      </p>
         <span className="clearsearch" onClick={()=> setlastcity("")}>Clear History</span>
  </div>
  )
}

export default Searchedhist;