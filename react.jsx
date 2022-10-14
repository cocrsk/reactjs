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


import { useState } from 'react';

 function App() {
   const [car, setCar] = useState("Tata");
   const selectHandler = (event) => {
     setCar(event.target.value);
   }
   return(
     <select value={car} onChange={selectHandler}>
       <option value="Ford">Ford</option>
       <option value="Tata">Tata</option>
       <option value="Tesla">Tesla</option>
       <option value="Ferrari">Ferrari</option>
     </select>
   );
 }

export default App;
