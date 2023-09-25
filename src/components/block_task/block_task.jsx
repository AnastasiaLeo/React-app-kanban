import React, {useState} from "react";
import './block_task.css';
import Task from "../task/task.jsx";
import Btn from "../button/btn.jsx";
import Input from '../input/input.jsx';

function BlockTask ( {arrTasks, blockType, setNew} ) {
    let [ click, setClick ] = useState(false);
    let [ newTask, setNewTask] = useState('');  
    let [ localArr, setlocalArr ] = useState( arrTasks );

    const handlerOnClickBtn = () => {
        if ( click ) {
            if ( newTask.trim().length > 0 ){
                const addingTask = {
                    id: localArr.length ? localArr[localArr.length - 1].id + 1 : 1,
                    name: newTask,
                    description: ''
                }
                console.log( "внутри хэндлер" );
                console.log( localArr );
                let newArrBacklog = localArr;
                newArrBacklog = [...localArr, addingTask];
                //console.log( newArrBacklog );
                setlocalArr(newArrBacklog);
                localStorage.backlog = JSON.stringify( newArrBacklog );
                setNewTask("");
                setNew(newArrBacklog);
            }
        }
        click = setClick( !click );
    }
    const handlerOnChangeInput = (event) => {
        setNewTask(event.target.value);
    }
    return(
        <div className="block__wrap">
            <h2>{blockType}</h2>
            <div className="block__task">
                {
                    localArr.map( (arr) => (
                        <Task key={arr.id} name={arr.name} description={arr.description} />
                    ))
                }
                {click ? <Input value={newTask} onChange={handlerOnChangeInput} /> : ''}
                <Btn click={click} onClick={handlerOnClickBtn} />
            </div>
        </div>
    )
}

export default BlockTask;