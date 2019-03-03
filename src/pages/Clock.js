import React ,{ Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = 
            {
                date: new Date(),
            }
    }
    // 在组件挂载后自动调用
    componentDidMount(){

    };

    //在组件卸载之前自动调用
    componentWillUnmount(){

    };

    //UI每次更新后调用
    componentDidupdate(){

    };

    render(){
        return(
            <div>
                <h1>Hello,World</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}