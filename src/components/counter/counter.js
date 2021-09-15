import React from "react";
import "./counter.css";

class Counter extends React.Component{
    state = {
        counterValue : 0
    };

incrementCounter(){
    this.setState((state) => ({counterValue: state.counterValue + 1}));
}
decrementCounter(){
    this.setState((state) => ({counterValue: state.counterValue - 1}));
}
render(){
    return (
        <div className = "regularDiv">
            <h1>Counter: {this.state.counterValue}</h1>
            <button onClick={() => this.incrementCounter()}>increment</button>
            <button onClick={() => this.decrementCounter()}>decrement</button>
        </div>
    );
}
}
export default Counter;