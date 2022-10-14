import { useState } from 'react';

 function App() {
   const [inputs, setInputs] = useState({});
   const submitHandler = (event) => {
     event.preventDefault();
     console.log(inputs);
   }

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

   return(
     <form onSubmit={submitHandler}>
     <label>First Name: </label>
     <input type="text" name="fName" value = {inputs.fName || ""} onChange={changeHandler}></input>
     <label>Last Name: </label>
     <input type="text" name="lName" value = {inputs.lName || ""} onChange={changeHandler}></input>
     <input type="submit"/>
     </form>
   );
 }

export default App;
