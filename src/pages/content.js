import React, {Component} from 'react';
import ShoppingList from './ShoppingList';
import Picture from './Picture';

class Content extends Component{
    render(){
        const picture = {
            src: 'https://cdn.nlark.com/yuque/0/2018/jpeg/84141/1536207007004-59352a41-4ad8-409b-a416-a4f324eb6d0b.jpeg',
        };
        return(
            < ShoppingList name = '张三'
            age = '13'
            sex = '男' >
                {<h4>有点low</h4>}
                <Picture src={picture.src}></Picture>
                <h1>nihao</h1>
            </ShoppingList>
        )
    }
}

export default Content;