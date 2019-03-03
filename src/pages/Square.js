import React, {Component } from 'react';

class Square extends Component{
    constructor(props){
        super(props);
        this.state={
            value: 0,
        }
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    this.setState(
                        {value: this.state.value+1}
                    )
                }}>{this.state.value}</button>
            </div>
        )
    }
}
export default Square;