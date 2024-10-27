import ReactDOM from 'react-dom/client';
import InfoCard from './Components/InfoCard';
import './styles.css';
import React from 'react';

export class App extends React.Component {
    render() {
        return (
            <div id="container" style={{ margin: '40px' }}>
                <InfoCard name="Rudra" age="21" phone="1234567890" />
            </div>
        )
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);