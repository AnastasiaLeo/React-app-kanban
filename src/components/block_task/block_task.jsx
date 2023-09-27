import React, {useState} from "react";
import './block_task.css';
import Task from "../task/task.jsx";
import Btn from "../button/btn.jsx";
import Input from '../input/input.jsx';
import '../select/select.jsx';
import SelectTask from "../select/select.jsx";

function BlockTask ( {arrTasks, blockType, setNew, arrSelect, handlerArrSelect} ) {
    let [ click, setClick ] = useState(false);
    let [ newTask, setNewTask] = useState('');  
    let [ localArr, setlocalArr ] = useState( arrTasks );
    let [ taskSelect, setTaskSelect ] = useState('');

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
    const handlerOnchangeSelect = (event) => {
        setTaskSelect(event.target.value);
        console.log(event.target.selectedIndex);
    }
    const inputOrSelect = () => {
        if (click){
            if (blockType === 'Backlog'){
                return showInput(newTask, handlerOnChangeInput);
            } else {
                return showSelect(arrSelect, handlerArrSelect, taskSelect, handlerOnchangeSelect );
            }
        }
        else { return '' }
    }
    return(
        <div className="block__wrap">
            <h2>{blockType}</h2>
            <div className="block__task">
                {
                    localArr.map( (item) => (
                        <Task key={item.id} name={item.name} description={item.description} />
                    ))
                }
                { /*{click ? <Input value={newTask} onChange={handlerOnChangeInput} /> : ''} */}
                { inputOrSelect() }
                <Btn click={click} onClick={handlerOnClickBtn} />
            </div>
        </div>
    )
}

function showInput(newTask, handlerOnChangeInput){
    return <Input value={newTask} onChange={handlerOnChangeInput} />
}

function showSelect(arrSelect, handlerArrSelect, taskSelect, handlerOnchangeSelect ){
    return <SelectTask arrSelect={arrSelect} handlerArrSelect={handlerArrSelect} value={taskSelect} onChange={handlerOnchangeSelect} /> 
}

export default BlockTask;