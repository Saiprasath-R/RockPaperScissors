import logo from './logo.svg';
import {useState} from "react";
import './App.css';
import Axios from "axios"

function App() {
   const [name, setName] = useState("");
   const [age, setAge] = useState(0);
   const [country, setCountry] = useState("");
   const [position, setPosition] = useState("");
   const [wage, setWage] = useState(0);

    const addEmployee=()=>{
        Axios.post("http://localhost:3001/create",{name:name,age:age,country:country,position:position,wage:wage}).then(()=>{ console.log("poda punda")})
    }


  
  return (
    <div className="App">
      <div className="information">
       <label> NAME </label>
       <input type="text" onChange={(e)=>{
         setName(e.target.value);
       }} />
       <label > AGE</label>
       <input type="number" onChange={(e)=>{
         setAge(e.target.value);
       }} />
       <label > COUNTRY </label>
       <input type="text" onChange={(e)=>{
         setCountry(e.target.value);
       }}/>
       <label > POSITION </label>
       <input type="text" onChange={(e)=>{
         setPosition(e.target.value);
       }} />
       <label > WAGE </label>
       <input type="number" onChange={(e)=>{
         setWage(e.target.value);
       }} />
       <br />
       <button onClick={addEmployee}> ADD EMPLOYEE </button>
       <br />
      </div>
    </div>
  );
} 

export default App;
