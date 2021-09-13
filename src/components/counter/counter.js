import React from "react";
import "./counter.css";

class Counter extends React.Component{
    state = {
        counterValue : 0
    };

incrementCounter(){
    let initialValue = this.state.counterValue;
    this.setState({
        counterValue: initialValue + 1
    });
}
decrementCounter(){
    let initialValue = this.state.counterValue;
    this.setState({
        counterValue: initialValue - 1
    });
}
render(){
    return (
        <div className = "regularDiv">
            <h1>Counter: {this.state.counterValue}</h1>
            <button onClick={this.incrementCounter.bind(this)}>increment</button>
            <button onClick={this.decrementCounter.bind(this)}>decrement</button>
        </div>
    );
}
}
export default Counter;