import React from "react";
import { createRoot } from "react-dom/client";
import MainQuiz from "./Components/main";
import './styles.css'

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1 style={{margin: '1rem 2rem'}}>Quiz App</h1>

                <MainQuiz />
            </div>
        )
    }
}

const container = document.getElementById('root')
createRoot(container).render(<App />)