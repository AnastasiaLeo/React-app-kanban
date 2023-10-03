import React, { useEffect, useState } from "react";
import './select.css'

function SelectTask ({ arrSelect, handlerArrSelect, value, onChange }) {

    const options = arrSelect.map( (item) => { 
        return <option key={item.id}>{item.name}</option> 
    } )

    return (
        <div>
            <select value={value} onChange={onChange} className="select" >
                {options}
            </select>
        </div>
    )
}

export default SelectTask;
