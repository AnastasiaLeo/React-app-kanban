import React, {useState, useEffect} from "react";
import './main.css';
import Task from "../task/task.jsx";
import Btn from "../button/btn.jsx";
import Input from '../input/input.jsx';
import { mockTasks } from "./mock.js";

const test = [ {id:1,name:'zz',desc:'aa'},{id:2,name:'xx',desc:'vv'} ]
localStorage.setItem('backlog', JSON.stringify(test))

function MainBody () {

    let [ arrBacklog, setArrBacklog ] = useState( JSON.parse( localStorage.backlog ) );
    let [ arrReady, setArrReady ] = useState( JSON.parse( localStorage.ready ) );
    let [ arrInProgress, setArrInProgress ] = useState( JSON.parse( localStorage.inProgress ) );
    let [ arrFinished, setArrFinished ] = useState( JSON.parse( localStorage.finished ) );
    // localStorage.setItem( 'backlog', '' );
    // localStorage.setItem( 'ready', '' );
    // localStorage.setItem( 'inProgress', '' );
    // localStorage.setItem( 'finished', '' );

    let [ click, setClick ] = useState(false);
    let [ newTask, setNewTask] = useState('');  

    const handleOnClickBtn = () => {
        if ( newTask ){
            if ( click ) {
                let arrBacklog1 = JSON.parse(localStorage.backlog).length > 0 ? JSON.parse( localStorage.backlog ) : [];
                const addingTask = {
                    id: arrBacklog1.length ? arrBacklog1[arrBacklog1.length - 1].id + 1 : 1,
                    name: newTask,
                    description: ''
                }
                console.log( arrBacklog1 );
                arrBacklog1.push(addingTask);
                localStorage.backlog = JSON.stringify( arrBacklog1 );
            }
            click = setClick( !click );
        }
    }
    const handlerOnChangeInput = (event) => {
        setNewTask(event.target.value);
        console.log(newTask);
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
                                backlog.issues.map( (task) => (
                                    <Task key={task.id} name={task.name} description={task.description} />
                                ))
                            }
                            {click ? <Input value={newTask} onChange={handlerOnChangeInput} /> : ''}
                            <Btn click={click} onClick={handleOnClickBtn} />
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