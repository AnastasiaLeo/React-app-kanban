import React from "react";
import './main.css';

function MainBody() {
    return(
        <div className="main">
            <div className="main__wrap container">
                <div className="block__wrap">
                    <h2>Backlog</h2>
                    <div className="block__task"></div>
                </div>
                <div className="block__wrap">
                    <h2>Ready</h2>
                    <div className="block__task"></div>
                </div>
                <div className="block__wrap">
                    <h2>In Progress</h2>
                    <div className="block__task"></div>
                </div>
                <div className="block__wrap">
                    <h2>Finished</h2>
                    <div className="block__task"></div>
                </div>
            </div>
        </div>
    )
}

export default MainBody;