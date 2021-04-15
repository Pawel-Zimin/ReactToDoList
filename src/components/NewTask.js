const NewTask = (props) => {
   const { text, deadline, id, active, finishDate, important } = props.task;
   const { deleteTask, changeTask } = props;

   const styleImportant = {
      color: 'red',
   }

   if(active){
      return (
         <div>
            <p style={ important ? styleImportant : null }>
               { text } - to: { deadline }
               <button onClick={() => changeTask(id)}>DONE</button>
               <button onClick={() => deleteTask(id)}>X</button>
            </p>
         </div>
      );
   }else{
      return (
         <div>
            <p><strong>{ text }</strong> - <em>finished: { new Date(finishDate).toLocaleString() }</em></p>
         </div>
      );
   }
}
 
export default NewTask;