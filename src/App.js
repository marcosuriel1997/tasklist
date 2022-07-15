import { useEffect, useState } from 'react';
import './App.css';
import CreateTask from './Components/CreateTask';
import TableTask from './Components/TableTask';
import Visibility from './Components/Visibility';

function App() {

  const [tareas, setTareas] = useState([]);
  const [completed, setCompleted] = useState(false);

  const addTask = (taskName)=>{
    if( !tareas.find( tarea=> tarea.name === taskName ) ){
      let obj = { name: taskName, done:false }
      setTareas([...tareas, obj]);
    }
  }

  const stateTask = (task)=>{
    setTareas(tareas.map( (tarea)=> tarea.name === task.name ? {...tarea, done: !tarea.done} : tarea ) );
  }

  const clearTask = ()=>{
    setTareas( tareas.filter( tarea=> !tarea.done ) );
    setCompleted(false);
  }

  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("tareas"));
    if(data){
      setTareas(data);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas])

  return (
    <main className="bg-dark text-white vh-100">
      <div className='container p-5 col-md-4 offset-md-4'>
      <CreateTask addTask={addTask} />
      <TableTask  tareas={tareas}  stateTask={stateTask}/>

      <Visibility  ischecked={completed} clearTask={clearTask} setCompleted={(checked)=> setCompleted(checked) } />

      {  completed && <TableTask  tareas={tareas}  stateTask={stateTask} completed={completed} />  }
      </div>
    </main>
  );
}

export default App;
