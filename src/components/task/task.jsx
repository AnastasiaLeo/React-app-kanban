import React from "react";
import './task.css';

function TaskWrap ({ id, name, clickShowDescription, blockType }) {

    return(
        <div className="taskWrap" onMouseDown={clickShowDescription}>
            <p className="text">
                {name}
            </p>
        </div>
    )
}

export default TaskWrap;