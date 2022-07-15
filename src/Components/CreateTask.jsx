import { useState } from "react";


const CreateTask = (props)=>{
    
    const [createTask, setCreateTask] = useState("");

    const sendTarea = (e)=>{
        e.preventDefault();
        props.addTask(createTask);
        setCreateTask("");
    }

    return(
        <div>
            <form onSubmit={sendTarea}>
                <div className="row mb-3">
                <div className="col-lg-8 col-md-8">
                <input className="form-control" type="text" value={createTask} onChange={(e)=> setCreateTask(e.target.value) } />
                </div>
                <div className="col-lg-3 col-md-3">
                <button className="btn btn-primary btn-md" >Enviar</button>
                </div>
                </div>
            </form>
        </div>
    );
}
export default CreateTask;