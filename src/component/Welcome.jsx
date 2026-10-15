import React from "react";
import "./style.css"


// setState already defined in class, no need to import it

export class Welcome extends React.Component{
    constructor(){
        super()
        this.state = {count: 0}
        this.Increment = this.Increment.bind(this)   // bind method increment with current object - like incrementing value
        this.Decrement = this.Decrement.bind(this)   
        this.Reset = this.Reset.bind(this)   
    }
    Increment(){
        this.setState({count: this.state.count + 1})
    }
    Decrement(){
        this.setState({count: this.state.count - 1})
    }
    Reset(){
        this.setState({count: 0})
    }
    render(){
        return(
            <>
            <section>
            <div>
                <h1>Hello from Welcome.jsx class component</h1>
                <h1> Count: {this.state.count}</h1>
                
                {/* <button onClick = {()=> this.setState({count: this.state.count + 1})}>+</button>
                <button onClick = {()=> this.setState({count: this.state.count - 1})}>-</button>
                <button onClick = {()=> this.setState({count: 0})}>Reset</button> */}

                <button onClick = {this.Increment}>+</button>
                <button onClick = {this.Decrement}>-</button>
                <button onClick = {this.Reset}>Reset</button>

            </div>
            </section>
            </>
        )
    }
}