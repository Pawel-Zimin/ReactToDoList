import NewTask from "./NewTask"

const TaskList = (props) => {
   const activeTasks = props.tasks.filter(task => task.active);
   const tasksDone = props.tasks.filter(task => !task.active);

   activeTasks.sort((a, b) => {
      if(a.deadline < b.deadline) return -1;
      if(a.deadline > b.deadline) return 1;
      return 0;
   });

   const active = activeTasks.map(task => <NewTask key={task.id} task={task} deleteTask={props.deleteTask} changeTask={props.changeTask}/>)
   const done = tasksDone.map(task => <NewTask key={task.id} task={task} deleteTask={props.deleteTask} changeTask={props.changeTask}/>)

   return (
      <div>
         <h2>TaskList</h2>

         <div className="tasksActive">
            { active.length === 0 ? <p>Everything's done</p> : <h3>tasksActive: (<span>{ active.length }</span>)</h3> }
            { active }
         </div>

         <hr/>

         <div className="tasksDone">
            <h3>tasksDone: (<span className='nbrOfTasksDone'>{ done.length }</span>)</h3>
            { done.length > 5 && <p style={{textDecoration: 'underline'}}>Only last 5 tasks are displayed</p> }
            { done.slice(0, 5) }
         </div>
      </div>
   );
}
 
export default TaskList;