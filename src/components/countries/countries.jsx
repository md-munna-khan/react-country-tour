import { useEffect } from "react";
import { useState } from "react";
import './countries.css'
import Country from "../country/country";
const Countries = () => {


    const [visitedFlags,setVisitedFlags] =useState([])
    const [visitedCountries,setVisitedCountries]= useState([])
   
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

    const visitedHandleButton = country =>{
        console.log("add this to your visited country")
const newVisitedCountries = [...visitedCountries,country];
setVisitedCountries(newVisitedCountries)
    }
    const visitFlagButton= flag =>{
    const addNewFlag=[...visitedFlags,flag]
    setVisitedFlags(addNewFlag)
    }


    return (
        <div className=""> 
      <h3>Countries:{countries.length} </h3>
    <div>
    <h4>Visited countries:{visitedCountries.length}</h4>
   
    <ul>
        {
            visitedCountries.map(country=> <li key={country.cca3}>
                {country.name.common}
            </li>)
        }
    </ul>
    </div>
    <div className="flag-container">
        {
            visitedFlags.map((flag,idx)=> <img key={idx} src={flag}></img>  )
        }
    </div>
   <div className="country-container">
   {
        countries.map(country=><Country
             key={country.cca3} 
             visitedHandleButton ={visitedHandleButton}
             visitFlagButton={ visitFlagButton}
             outCountry={country}></Country>)
    }
   </div>
        </div>
    );
};

export default Countries;