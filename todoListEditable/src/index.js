import ReactDOM from 'react-dom/client'
import React, { Component } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import TodoWrapper from './Components/TodoWrapper';

export class App extends Component {
  render() {
    return (
      <div className='container'>
        <TodoWrapper />
      </div>
    )
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);