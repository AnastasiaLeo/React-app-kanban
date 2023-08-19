import React from "react";
import './btn.css';
import Input from '../input/input.jsx';

class Btn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false,
        }
    }
    handleClick = () => {
        console.log(this.state.clicked);
        if (this.state.clicked == true){
            this.setState({
                clicked: false,
            })
        } else {
            this.setState({
                clicked: true,
            })
        }
    }

    render(){
        const clicked = this.state.clicked;
        return(
            <div>
                {/* <Input /> */}
                {clicked ? <Input /> : ''}
                <button className={clicked ? "btn btn-submit" : "btn"} onClick={this.handleClick}>
                    {clicked ? 'Submit' : '+ Add cart'}
                </button>
            </div>
        )
    }
}

export default Btn;