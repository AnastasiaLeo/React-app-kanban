import React, {useState, useEffect} from "react";
import './main.css';
import Task from "../task/task.jsx";
import Btn from "../button/btn.jsx";
import Input from '../input/input.jsx';
import { mockTasks } from "./mock.js";

const test = [ {id:1,name:'zz',description:'aa'},{id:2,name:'xx',description:'vv'} ]
localStorage.setItem('backlog', JSON.stringify(test))

function MainBody () {

    let [ arrBacklog, setArrBacklog ] = useState( JSON.parse( localStorage.backlog ) );
    // let [ arrReady, setArrReady ] = useState( JSON.parse( localStorage.ready ) );
    // let [ arrInProgress, setArrInProgress ] = useState( JSON.parse( localStorage.inProgress ) );
    // let [ arrFinished, setArrFinished ] = useState( JSON.parse( localStorage.finished ) );

    let [ click, setClick ] = useState(false);
    let [ newTask, setNewTask] = useState('');  

    const handlerOnClickBtn = () => {
        if ( click ) {
            if ( newTask.trim().length > 0 ){
                const addingTask = {
                    id: arrBacklog.length ? arrBacklog[arrBacklog.length - 1].id + 1 : 1,
                    name: newTask,
                    description: ''
                }
                console.log( "внутри хэндлер" );
                console.log( arrBacklog );
                let newArrBacklog = arrBacklog;
                newArrBacklog = [...arrBacklog, addingTask];
                setArrBacklog(newArrBacklog);
                localStorage.backlog = JSON.stringify( arrBacklog );
                setNewTask("");
            }
        }
        click = setClick( !click );
    }
    const handlerOnChangeInput = (event) => {
        setNewTask(event.target.value);
    }

    const backlog = mockTasks.find(item => item.title === "backlog");
    const ready = mockTasks.find(item => item.title === "ready");
    const inProgress = mockTasks.find(item => item.title === "inProgress");
    const finished = mockTasks.find(item => item.title === "finished");
    return(
            <div className="main"> 
                <div className="main__wrap container">
                    <div className="block__wrap">
                        <h2>Backlog</h2>
                        <div className="block__task">
                            {
                                arrBacklog.map( (arr) => (
                                    <Task key={arr.id} name={arr.name} description={arr.description} />
                                ))
                            }
                            {click ? <Input value={newTask} onChange={handlerOnChangeInput} /> : ''}
                            <Btn click={click} onClick={handlerOnClickBtn} />
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
    //}
}

export default MainBody;