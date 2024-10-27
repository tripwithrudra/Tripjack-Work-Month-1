import React, { Component } from 'react';
import Counter2 from './Counter2';

export class Counter extends Component {
    constructor() {
        super() // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.state = {
            count: 0,
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.OnDecrement = this.OnDecrement.bind(this);
    }
    onIncrement = () => {
        if (this.state.count > 9) {
            this.setState({
                count: 0
            })
        }
        else {
            return this.setState({
                count: this.state.count + 1
            })
        }
    }
    OnDecrement = () => {
        if (this.state.count < 1) {
            this.setState({
                count: 10,
            })
        }
        else {
            return this.setState({
                count: this.state.count - 1
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <h3>Count: {this.state.count}</h3>
                <button className="button" onClick={this.onIncrement}>Increment</button>
                <button className="button" onClick={this.OnDecrement}>Decrement</button>

                <Counter2 count2={this.state.count} />
            </div>
        )
    }
}

export default Counter