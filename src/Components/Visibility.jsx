const Visibility = ({setCompleted, clearTask, ischecked})=>{

    const handleClic = ()=>{
        clearTask();
    }

    return(
        <div className="d-flex justify-content-between bg-secondary text-white text-center border-secondary">
        <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" checked={ischecked} onChange={ e=> setCompleted(e.target.checked) } />
        <label>Show completed tasks</label>
        </div>
        <button className="btn btn-danger btn-sm" onClick={handleClic}>Clear</button>
        </div>
    )
}
export default Visibility;