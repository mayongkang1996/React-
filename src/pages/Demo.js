import MyInput from './MyInput';
import React, { Component } from 'react';
import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            text: '',
        }
    }
    ontextChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            text: event.target.value,
        })
    };
    reset =()=>{
        this.setState({
            text: '', 
        })
    };
    
    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Input输入框演示</h1>
                <MyInput value={this.state.text} onChange={this.ontextChange}></MyInput>
                <button onClick={this.reset}>重置</button>
                <div>---------------------------------------------</div>

                <h1>Table组件演示</h1>
                <Tabs>
                    <TabPane tab='Tab 1' key='1'>Content of Tab Pane 1</TabPane>
                    <TabPane tab='Tab 2' key='2'>Content of Tab Pane 2</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Demo;
