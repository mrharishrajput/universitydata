import React, {useState,useEffect}  from "react";

import './App.css';

function App() {
  let [api,setapi]= useState();
  const[isloaded,setisloaded]=useState(false);
  
  useEffect(
    ()=>{
      fetch("http://universities.hipolabs.com/search?country=India").then((data)=>{
        return data.json();

      }).then((d)=>{
        setapi(d);
        console.log(d);

      }).then(()=>{
        // console.log(api);
        setisloaded(true);
      })
    },[]
  )


  return !isloaded? (
    <div className="App">
      App is Loading.................
    </div>
  ):(
    <div>
      {
        api.map((i,index)=>{
          return <div onClick={(e)=>{
            let d= e.target.value;
       }} key={index} >{i.name} <button value={index}>See Details</button></div>
        })
      }
      
      </div>
  )
}

export default App;
