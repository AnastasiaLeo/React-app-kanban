import React, { useEffect, useState } from "react";
import './btn.css';
import Input from '../input/input.jsx';

function Btn ( props ){
    const [ click, setClick ] = useState(false)

    useEffect( () => {
        click = setClick( !click )
        console.log(click);
    }, [ click])

    return(
        <div>
            {/* <Input /> */}
            {click ? <Input /> : ''}
            <button className={click ? "btn btn-submit" : "btn"} onClick={this.handleClick}>
                   {click ? 'Submit' : '+ Add cart'}
            </button>
        </div>
    )
}

// class Btn extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             clicked: false,
//         }
//     }
//     handleClick = () => {
//         //console.log(this.state.clicked);
//         this.setState({ clicked: !this.state.clicked })
//     }

//     render(){
//         const clicked = this.state.clicked;
//         return(
//             <div>
//                 {/* <Input /> */}
//                 {clicked ? <Input /> : ''}
//                 <button className={clicked ? "btn btn-submit" : "btn"} onClick={this.handleClick}>
//                     {clicked ? 'Submit' : '+ Add cart'}
//                 </button>
//             </div>
//         )
//     }
// }

export default Btn;