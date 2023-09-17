import { useState } from "react";
function App() {
const [Data,setData]=useState(null);
const [Data1,setData1]=useState(null);
const [results,setresults]=useState(null);
const resultcal=()=>{
   if((Data==="Dheeraj" && Data1==="Saritha")||(Data==="Saritha" && Data1==="Dheeraj")||(Data==="dheeraj" && Data1==="saritha")||(Data==="saritha" && Data1==="dheeraj")){
     return setresults(100);
   }
   if((Data==="Dheeraj" && Data1==="Namita")||(Data==="Namita" && Data1==="Dheeraj")||(Data==="dheeraj" && Data1==="namita")||(Data==="namita" && Data1==="dheeraj")){
    return setresults(100);
  }
else
   {
     var n=Math.random();
   n=n*100;
   n=Math.floor(n)+1;
   return setresults(n);}
}
  return (
    
<>
<div className="container">
  <p>The chance of a relationship working out between "{Data}" and "{Data1}"  is {results}%</p>
<h1>Love Calculator Result</h1>
    <div className="nameShow">
      <h1 hidden>A</h1>
          <h3>{Data}</h3>
          <div style={{fontSize:results}}>❤️</div>
          <h2>{Data1}</h2>
      <h1 hidden>B</h1>
    </div>

    <div className="result">
      <span>{results}%</span>
    </div>

    <div className="inputbox">
      <input type="text" name="" id="" onChange={(val)=>setData(val.target.value)} /><span color="black">And</span>
      <input type="text" onChange={(val)=>setData1(val.target.value)} /> <br />
      <button onClick={()=>resultcal()}>Check</button>
    </div>

</div>
<footer>
      <code>
        created by:Dheeraj Kumar
      </code>
    </footer>
</>
  );
}

export default App;
