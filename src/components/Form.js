import { useState } from 'react';

const Form = (props) => {
   const minDate = new Date().toISOString().slice(0, 10);
   const maxDate = `${parseInt(new Date().toISOString().slice(0, 4)) + 1}-12-31`;

   const [textInput, setTextInput] = useState('');
   const [dateInput, setDateInput] = useState(minDate);
   const [checkbox, setCheckbox] = useState(false);

   const { addTask } = props;

   const handleSubmit = (e) => {
      e.preventDefault();

      if(textInput === ''){
         alert('You need to enter a valid task text')
      }else{
         addTask(textInput, dateInput, checkbox);
      }

      setTextInput('');
      setDateInput(minDate);
      setCheckbox(false);
   }

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="text">Enter a task:</label>
         <input 
            type="text"
            id='text'
            placeholder='example text' 
            value={textInput}
            onChange={e => setTextInput(e.target.value)}
         />
         <button>Add</button>
         
         <br />
         <label htmlFor="date">Pick a deadline</label>
         <input 
            type="date" 
            id='date' 
            value={dateInput}
            onChange={e => setDateInput(e.target.value)}
            min={minDate} 
            max={maxDate}
         />
         
         <br/>
         <label htmlFor="checkbox">Important?</label>
         <input 
            type="checkbox" 
            id="checkbox"
            checked={checkbox}
            onChange={e => setCheckbox(e.target.checked)}
         />

         <hr/>
      </form>
   );
}
 
export default Form;