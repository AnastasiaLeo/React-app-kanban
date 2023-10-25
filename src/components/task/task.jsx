import React from "react";
import './task.css';
import { Link, Outlet } from 'react-router-dom';

function TaskWrap ({ id, name, blockType, arrTasks, clickShowDescription }) {
    
    return(
        <div className="taskWrap" onMouseDown={clickShowDescription}>   
            <p className="text">
                <Link key={id} to={`/${blockType}/${id}`}>
                    {name}
                </Link>
            </p>
            <Outlet context={{ hello: "wow" }} />
        </div>
    )
}

export default TaskWrap;

//убрать onMouseDown за него теперь Link