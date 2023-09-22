import React from "react";
import './task.css';

function TaskWrap ({ name, description }) {
    
    return(
        <div className="taskWrap">
            <p className="text">
                {name}
            </p>
        </div>
    )
}

export default TaskWrap;