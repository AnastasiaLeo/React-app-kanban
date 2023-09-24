import React from "react";
import './input.css';

function Input ( { value, onChange } ) {
    return(
        <input className="input" type="text" value={value} onChange={onChange} />
    )
}

export default Input;