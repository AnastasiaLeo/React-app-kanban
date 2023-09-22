import React, { useEffect, useState } from "react";
import './btn.css';
import Input from '../input/input.jsx';

function Btn ( { click, onClick } ){
    let [ newTask, setNewTask ] = useState('');

    
    return(
        <div>
            {click ? <Input newTask={newTask} /> : ''}
            <button className={click ? "btn btn-submit" : "btn"} onClick={onClick}>
                   {click ? 'Submit' : '+ Add cart'}
            </button>
        </div>
    )
}

export default Btn;

