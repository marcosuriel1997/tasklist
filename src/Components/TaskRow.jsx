const TaskRow = ({task, stateTask})=>{
    return(
        <tr>
            <td> {task.name} </td>
            <td> <input type="checkbox" checked={task.done} onChange={()=> stateTask(task) } /> </td>
        </tr>
    );
}
export default TaskRow;