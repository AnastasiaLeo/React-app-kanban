import React, { useState } from "react";
import './textarea.css';
import { useParams, useOutletContext } from "react-router-dom";

function TextAreaDesription({ id, name, description }){
    console.log(useParams());
    const {} = useParams();
    const context = useOutletContext();
    console.log(context);
    return(
        <div className="text-container">
            <p>Привет</p>
        </div>
    )
}

export default TextAreaDesription;