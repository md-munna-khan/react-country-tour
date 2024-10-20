import { useState } from 'react';
import './country.css'

const Country = ({outCountry ,visitedHandleButton, visitFlagButton}) => {
   const{name, flags ,population,area,cca3}=outCountry

const [visited,setVisited] = useState(false)

   const handleBUtton = ()=>{
setVisited(!visited)
   }

   console.log(visitedHandleButton)
    return (
    <div className={`countries ${visited ? "visited":"non-visited"}`}>
            <h3 style={{color:visited? "purple" : "red"}}>name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>area;{area}</h3>
            <h3>population:{population}</h3>
            <h3>code:{cca3}</h3>
            <button onClick={()=> visitFlagButton(outCountry.flags.png)}> add flag</button>
            <br />
            <button onClick={()=>visitedHandleButton(outCountry)}>Marks Visited</button>
            <br />
            <button onClick={handleBUtton}>{visited ?"visited":"going"}</button>
            {visited? "i have visited" : " i want to visited"}
        </div>
    );
};

export default Country;