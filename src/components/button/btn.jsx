import React, { useEffect, useState } from "react";
import './btn.css';

function Btn ( { click, onClick } ){
    return(
        <div>
            <button className={click ? "btn btn-submit" : "btn"} onClick={onClick}>
                   {click ? 'Submit' : '+ Add cart'}
            </button>
        </div>
    )
}

export default Btn;

