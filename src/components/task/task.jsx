import React from "react";
import './task.css';

class TaskWrap extends React.Component{
    render() {
        const { name, description } = this.props;
        // console.log(name);
        // console.log(description);
        return(
            <div className="taskWrap">
                <p className="text">
                   {name}
                </p>
            </div>
        )
    }
}

export default TaskWrap;