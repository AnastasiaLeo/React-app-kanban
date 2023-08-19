import React from "react";
import './main.css';
import Task from "../task/task.jsx";
import Btn from "../button/btn.jsx";
import { mockTasks } from "./mock.js";

class MainBody extends React.Component {
    render(){
        const backlog = mockTasks.find(item => item.title == "backlog");
        const ready = mockTasks.find(item => item.title == "ready");
        const inProgress = mockTasks.find(item => item.title == "inProgress");
        const finished = mockTasks.find(item => item.title == "finished");
        return(
            
                <div className="main"> 
                    <div className="main__wrap container">
                        <div className="block__wrap">
                            <h2>Backlog</h2>
                            <div className="block__task">
                                {
                                    backlog.issues.map( (task) => (
                                        <Task key={task.id} name={task.name} description={task.description} />
                                    ))
                                }
                                <Btn />
                            </div>
                        </div>
                        <div className="block__wrap">
                            <h2>Ready</h2>
                            <div className="block__task">
                            {
                                ready.issues.map( (ready) => (
                                    <Task key={ready.id} name={ready.name} description={ready.description} />
                                ))
                            }
                            </div>
                        </div>
                        <div className="block__wrap">
                            <h2>In Progress</h2>
                            <div className="block__task">
                            {
                                inProgress.issues.map( (inProgress) => (
                                    <Task key={inProgress.id} name={inProgress.name} description={inProgress.description} />
                                ))
                            }
                            </div>
                        </div>
                        <div className="block__wrap">
                            <h2>Finished</h2>
                            <div className="block__task">
                            {
                                finished.issues.map( (finished) => (
                                    <Task key={finished.id} name={finished.name} description={finished.description} />
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
}

export default MainBody;