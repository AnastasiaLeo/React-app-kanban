import React, { useState } from "react";
import './header.css';
import ListMenu from "../list_menu/list_menu";
import userIcon from './user-pic.svg';
import ellipse from './ellipse.svg';
import arrowDown from './arrow-down.png';

function Header() {
    let [ clickUserArrow, setclickUserArrow ] = useState( true ); 
    let [ arrowUser, setArrowUser ] = useState('');

    const handleOnMouseDown = () => {
        console.log('wow');
        if ( clickUserArrow ) {
            console.log(clickUserArrow);
            setclickUserArrow(!clickUserArrow);
            setArrowUser('header__arrow--up');
        } else { 
            setclickUserArrow(!clickUserArrow); 
            setArrowUser('');
        }
    } 

    return(
        <div className="header">
            <div className="header__wrap container">
                <p>Awesome Kanban Board</p>
                <div className="header__userMenu" onMouseDown={handleOnMouseDown}>
                    <div className='header__userIcon' >
                        <img src={userIcon} className="header__userPic" alt="User"></img>
                        <img src={ellipse} className="header__userEllipse" alt="User ellipse"></img>
                    </div>
                    <img src={arrowDown} className={arrowUser} alt="Arrow down"></img>
                    { !clickUserArrow ? <ListMenu /> : false }
                </div>
                
            </div>
        </div>
    )
}

export default Header;

