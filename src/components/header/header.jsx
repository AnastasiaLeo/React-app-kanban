import React from "react";
import './header.css';
import userIcon from './user-pic.svg';
import ellipse from './ellipse.svg';
import arrowDown from './arrow-down.png';

function Header() {
    return(
        <div className="header">
            <div className="header__wrap container">
                <p>Awesome Kanban Board</p>
                <div className="header__userMenu">
                    <div className='header__userIcon' >
                        <img src={userIcon} className="header__userPic" alt="User"></img>
                        <img src={ellipse} className="header__userEllipse" alt="User ellipse"></img>
                    </div>
                    <img src={arrowDown} alt="Arrow down"></img>
                </div>
            </div>
        </div>
    )
}

export default Header;

