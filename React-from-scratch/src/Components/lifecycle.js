import React, { Component } from 'react'

export class LifeCycle extends Component {
  constructor() {
    super();
    const square = document.createElement('div');
    let sstyles = square.style
    sstyles.backgroundColor = 'yellow';
    sstyles.width = '200px';
    sstyles.height = '200px';

    document.body.appendChild(square)
    console.log('lifecycle constructor called');

    // document.getElementById('box').style.backgroundColor = 'red';

  }

  componentDidMount() {
    const mountedSquare = document.getElementById('box');
    mountedSquare.style.backgroundColor = 'crimson';
    mountedSquare.style.padding = '20px';

  }

  render() {
    return (
      <div id="box">Lifecycle</div>
    )
  }

}

export default LifeCycle