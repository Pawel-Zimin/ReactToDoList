import '../App.css';
import Form from './Form';
import TaskList from './TaskList';

import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
      {
        id: 0,
        text: 'Finish this app',
        deadline: '2021-04-15',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: 'Send some CVs',
        deadline: '2021-04-19',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: 'Example 3',
        deadline: '2021-06-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: 'Example 4',
        deadline: '2021-04-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: 'Example 5',
        deadline: '2021-05-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: 'Example 6',
        deadline: '2021-04-16',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: 'Example 7',
        deadline: '2021-04-15',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: 'Example 8',
        deadline: '2021-04-15',
        important: false,
        active: true,
        finishDate: null,
      },
  ]);
  const [idCounter, setIDCounter] = useState(8);

  const addTask = (text, deadline, important) => {
    const newTask = {
      id: idCounter,
      text,
      deadline,
      important,
      active: true,
      finishDate: null,
    }
    setIDCounter(idCounter + 1);
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (id) => {
    const tasksCopy = [...tasks];
    const index = tasksCopy.findIndex(task => task.id === id);
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }

  const changeTaskState = (id) => {
    const tasksCopy = [...tasks];
    tasksCopy.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    setTasks(tasksCopy);
  }

  return (
    <div className="App">
      <h1>React to do list</h1>
      <Form addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} changeTask={changeTaskState}/>
    </div>
  );
}

export default App;