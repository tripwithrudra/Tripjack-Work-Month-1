import React, { Component } from 'react'


export class Counter2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count2: props.count2
        }
    }

    static getDerivedStateFromProps(props, state) {
        return {
            count2: props.count2
        }
    }
    render() {
        return (
            <div>
                <h1>Counter2</h1>
                <h3>Count: {this.props.count2}</h3>
            </div>
        )
    }
}

export default Counter2