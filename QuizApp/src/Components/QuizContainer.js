import React, { Component } from 'react'

export class QuizContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props);

    }
    
    render() {
        return (
            <div className="quiz-container">
                <h3>Question - {this.props.currentQuestionIndex + 1}:</h3>
                <h4>{this.props.currentQuestion.question}</h4>
                <ul>
                    {this.props.currentQuestion.options.map((option, index) => (
                        <li key={index}>
                            <button onClick={() => this.props.handleOptionClick(option)}>
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
                <h3>Score: {this.props.score}</h3>

            </div>
        )
    }
}

export default QuizContainer