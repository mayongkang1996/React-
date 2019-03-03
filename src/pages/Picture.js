/**
 * 一下是两种不同的写法，区别是：
 * 第一种写法传入参数的时候直接使用props
 * 第二种写法传入参数的时候使用props需要前面加一个this。
 */



// const Picture = (props)=>{
//     console.log(props);
//     return(
//         <div>
//             <img src={props.src} />
//             {props.children}
//         </div>
//     )
// }
// export default Picture;
import React,{ Component } from 'react';

class Picture extends Component{
    
    render(){
        console.log(this.props)
        return(
            <div>
                <img src={this.props.src} />
                {/* {props.children} */}
                <h1>这是一个Picture组件</h1>
            </div>
        )
    }
}

export default Picture;


