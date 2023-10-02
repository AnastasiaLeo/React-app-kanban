import React, { useEffect, useState } from "react";
import './select.css'

function SelectTask ({ arrSelect, handlerArrSelect, value, onChange }) {
    let [ newArr, setNewArr ] = useState(arrSelect);
    const [idSelected, setIdSelected] = useState('');

    const options = newArr.map( (item) => { 
        return <option key={item.id}>{item.name}</option> 
    } )
    //console.log(handlerOnchangeSelect);
    // useEffect(()=>{

    // }, [valueLocal])

    return (
        <div>
            <select value={value} onChange={onChange} className="select" >
                {options}
            </select>
        </div>
    )
}

export default SelectTask;
