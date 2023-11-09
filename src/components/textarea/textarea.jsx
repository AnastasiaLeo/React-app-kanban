import React, { useState } from "react";
import './textarea.css';
import { useParams } from "react-router-dom";
import closing_cross from './images/closing_cross.svg';

function TextAreaDesription({  }){

    const {taskId, task} = useParams(); //не непосредственно дочерний, использовать useparams
    console.log(taskId, task);
    let name = "";
    let dateTask;
    let description = "";

    const taskDefinition  = () => {
        // console.log(localStorage.backlog);
        if ( task === 'Backlog' ){
            let arrBacklog = JSON.parse( localStorage.backlog );
            arrBacklog.map( (item) => {
                // console.log("нашел " + typeof(item.id),typeof(taskId));
                if ( String(item.id) === taskId) {
                    name = item.name;
                    dateTask = item.dateTask;
                    let positionDate = dateTask.indexOf('T');
                    if ( positionDate !== -1 ){
                        console.log("позиция Т " + positionDate);
                        dateTask = dateTask.slice(0,positionDate);
                    }
                    description = item.description;
                    console.log("итемдэйт " + item.dateTask);
                }
                // console.log(name,dateTask,description);
            } )
        } else if ( task === 'Ready' ){

        } else if ( task === 'In progress' ){
            
        } else if ( task === 'Finished' ){
            
        }
    };
    taskDefinition();

    return(
        <div className="text-container container">
            <div className="text-container__wrap-heading">
                <p className="text-container__heading">{task}, {name}, {dateTask}</p>
                <div>
                    <img src={closing_cross} alt="Close description" />
                </div>
            </div>
            <textarea className="text-container__area">{description}</textarea>
        </div>
    )
}

export default TextAreaDesription;