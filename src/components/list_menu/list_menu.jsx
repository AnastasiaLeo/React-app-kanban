import React from "react";
import './list_menu.css';

function ListMenu () {
    return(
        <div className="wrap">
            <div className="list_wrap">
                <div className="list__triangle"></div>
                <p className="list__item">Profile</p>
                <p className="list__item">Log Out</p>
            </div>
        </div>
    )
}

export default ListMenu;