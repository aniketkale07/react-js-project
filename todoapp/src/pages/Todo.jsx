import { useState } from "react"
import { Fragment } from "react";
import './style.css';
export function Todo() {

    const [tasks, setTasks]= useState([]);
    const [input, setInput] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editValue , setEditValue] = useState("");


    const formHandler=(e)=>{
        e.preventDefault();
        if(input.trim() === "") return;

        setTasks([...tasks,input]);
        setInput("");
    }

    // save the Updated Task
    const saveUpdatedTask=()=>{
        const updatedTasks = [...tasks];
        updatedTasks[editIndex]=editValue;
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditValue("");

    }

    // edit Task
    const editTask=(editIndex)=>{
      
        setEditIndex(editIndex);
        setEditValue(tasks[editIndex]);

    }

    // delete Task
    const deleteTask=(deleteIndex)=>{
        const updatedTasks = tasks.filter((_, index)=> deleteIndex !== index);
        setTasks(updatedTasks);
    }
    return (
        <Fragment>
            <div className="main-container">
                <div className="container">
                    <div className="heading">
                        <h2>TODO APP</h2>
                    </div>
                    <div className="form-container">
                        <form onSubmit={formHandler}>
                            <label htmlFor="task">Enter the Task</label>
                            <input type="text" name="task" id="task" value={input} onChange={(e)=>setInput(e.target.value)} required />
                            <button type="submit">Add Task</button>
                        </form>
                    </div>
                    <hr />
                </div>

                {/*  display list of tasks */}
                <div className="list-container">
                        
                      <ul>
                        {
                            tasks.map((item, index)=>{

                             return   <li key={index}>
                                    {
                                        index === editIndex ?
                                        (<>
                                         <input type="text" value={editValue} onChange={(e)=>setEditValue(e.target.value)} />
                                         <button onClick={()=>{saveUpdatedTask()}}  disabled={!editValue.trim()}>Save</button>
                                        </>)
                                        :
                                        (<>
                                         {item}
                                         <button onClick={()=>{editTask(index)}}>Edit </button>
                                         <button onClick={()=>{deleteTask(index)}}>delete </button>
                                        </>)
                                    }
                                </li>



                            })
                        }
                      </ul>

                    </div>

            </div>
        </Fragment>
    )
}