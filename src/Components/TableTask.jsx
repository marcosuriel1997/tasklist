import TaskRow from "./TaskRow";

const TableTask = ({tareas, stateTask, completed = false})=>{

    const tasks = (doneValue)=>{
        return(
        tareas
        .filter( (task)=> task.done === doneValue )
        .map( (task)=> (
            <TaskRow task={task} key={task.name} stateTask={stateTask}/>
        ))
        )
    }

    return(
        <table className="table table-dark table-striped table-bordered border-secondary">
        <thead>
          <tr className="table-primary">
            <th>Tareas</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks(completed)
          }
        </tbody>
      </table>
    );
}
export default TableTask;