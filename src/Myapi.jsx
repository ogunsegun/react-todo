import React, { useEffect, useRef, useState } from 'react'
import AddTodoForm from './AddTodoForm';


//My work on api!!!!

function Myapi() {
    
    //to reset the form
    const inputRef = useRef(null)

    useEffect(()=>{
        inputRef.current.focus()
    },[]);
    //----reset

    const [phoneNumber, setPhoneNumber] = useState("");
    const [result, setResult] = useState("");
    const [country, setCountry] = useState("");
    
    const handleApiTodo = (event) => {
        event.preventDefault();
        fetchData1();
        setCountry('');
        setPhoneNumber('');
    }

    const fetchData1 = async() => {
        const url = `http://apilayer.net/api/validate?access_key=${import.meta.env.VITE_NUM_API_ACCESS_KEY}&number=${phoneNumber}&country_code=${country}&format=1`;
        
       const options = {
          method: 'GET'
       };
    
       try {
          const response = await fetch(url, options);
          if(!response.ok){
            const message = `Error: ${response.error}`;
            throw new Error(message);
          }
          const data = await response.json();
          setResult(data);
          console.log(data)

          //const output = data.records.map()
       } catch (error) {
          console.error(error);
       }
    }
    
    useEffect(() =>{
        if (phoneNumber && country) {
            fetchData1();
        }
    },[]);
    
  return (
    <div>
      <p>TEST ONE </p>
       <form onSubmit={handleApiTodo}>
        <label>Phone Numbers: </label>
         <input id='apinum' type='text' name='number' 
         value={phoneNumber} placeholder='Enter Phone Numbers'
         onChange={(e) => setPhoneNumber(e.target.value)} ref={inputRef}/>
         <br></br>
         <label>Country: </label>
         <input id='apinum1' type='text' name='countrys' placeholder='Example:Enter NG not Nigeria'
         value={country} onChange={(e) => setCountry(e.target.value)} ref={inputRef}/>
         <br></br>
         <button type='submit'>Validate</button>
       </form> 
       {result && (
        <div>
          <h2>Validation Results:</h2>
          <p>Valid: {result.valid ? 'Yes' : 'No'}</p>
          <p>Country: {result.country_name}</p>
          <p>Carrier: {result.carrier}</p>
          {/* Add other fields you want to display */}
        </div>
      )}
    </div>
  )
}

export default Myapi
