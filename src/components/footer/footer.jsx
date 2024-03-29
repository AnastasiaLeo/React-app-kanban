import React from "react";
import './footer.css'

function Footer({ activeTasks, finishedTasks }) {
    const nowYear = new Date();
    return(
        <div className="footer">
            <div className="footer__wrap container">
                <div className="footer__tasks">
                    <p>Active tasks: {activeTasks}  Finished tasks: {finishedTasks} </p>
                </div>
                <p>Kanban board by AnastasiaLeo, {nowYear.getUTCFullYear()} </p>
            </div>
        </div>
    )
}

export default Footer