import './App.css';
import React,{ useState} from 'react';
import axios from 'axios';


function App() {
    const [code,setCode]=useState("");
    const handleSubmit= async()=>{
        const payload={
            language:"cpp",
            code
        };
        const output= await axios.post("http://localhost:5000/run",payload).catch(error=>console.log(error));
          console.log(code);
          console.log(output);
    
    };
    
  return (
   <>
   <h1>Online Compiler for C++</h1>
   <textarea 
   style={{"width":"500px","height":"500px","marginLeft":"25px"}}
   value={code}
   onChange={(e)=>{
       setCode(e.target.value);
   }}
   ></textarea>
   <br />
   <button type="submit"
   onClick={handleSubmit}
   >Submit</button>
   </>
  );
}

export default App;
