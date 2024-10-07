import ReactDOM from 'react-dom/client';
import InfoCard from './Components/InfoCard';

function App() {
    return (
        <InfoCard name="Rudra" age="21" phone="1234567890" />
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);