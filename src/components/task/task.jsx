import React from "react";
import './task.css';
import TextAreaDesription from "../textarea/textarea";

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