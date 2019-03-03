import React,{ Component } from 'react';

class ShoppingList extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Shopping List For {this.props.name},he age is {this.props.age},sex is {this.props.sex}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                    <li>{this.props.children}</li>
                </ul>
            </div>
        )
    }
}
export default ShoppingList;