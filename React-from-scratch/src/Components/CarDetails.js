import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "black" }; // A in-file Property
    }
    render() {
        return (
            <>
                <div>
                    <h3>I am a {this.state.color} color Car.</h3>
                    <h3>I am of {this.props.brand} brand.</h3>
                </div>
            </>
        );
    }
}

export default Car;