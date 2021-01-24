import React, {useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import DisplayComponent from './displaycomponent';

const url = "https://developerfunnel.herokuapp.com/location"

function HooksComponent(){
  const [title] =useState('Hooks App');
  const [count,xyz] =useState(0);
  const [count1,abc] =useState(0);
 const [city,setCity] = useState();

useEffect(() =>{
  fetch(url)
  .then((res) => res.json)
  .then((data) => {
    setCity(data)
  })
})

  return(
    <React.Fragment>
    <center>
    <h2>{title}</h2>
      <h2>{count}</h2>
      <button onClick={() =>  {xyz("Bonjour!!")}}>click me</button>
      <h2>{count1}</h2>
      <button onClick={() =>  {abc(count1+1)}}>click me</button>
      <DisplayComponent cityData={city}/>
        </center>
    </React.Fragment>

  )
}

export default HooksComponent;
