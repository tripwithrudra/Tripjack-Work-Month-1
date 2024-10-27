import React, { Component } from 'react'

export class QuizContainer extends Component {
    constructor(props) {
        super(props);
        console.log("QuizContainer Constructor called");
        this.state = {
            nameEntered: this.props.nameEntered
        }
    }

    componentDidMount() {
        console.log("QuizContainer has mounted.");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Next Props", nextProps);
        console.log("This Props", this.props);

        let shouldUpdate = nextProps.currentQuestion !== this.props.currentQuestion || nextProps.score !== this.props.score || nextProps.name !== this.props.name || nextProps.nameEntered !== this.props.nameEntered;
        return shouldUpdate;
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.currentQuestion !== this.props.currentQuestion) {
            console.log("QuizContainer Updated! New question.");
        }
    }

    componentWillUnmount() {
        console.log("QuizContainer is removed from the DOM");
    }

    static getDerivedStateFromProps(props, state) {
        if (state.nameEntered !== props.nameEntered) {
            return state.nameEntered= props.nameEntered
        }
        return null;
    }

    render() {
        const { currentQuestionIndex, currentQuestion, score, handleOptionClick, name } = this.props;
        return (
            <div className="quiz-container">
                <h2>Hello {name}!</h2>
                {
                    this.state.nameEntered && (
                        <div>
                            <h3>Question - {currentQuestionIndex + 1}:</h3>
                            <h4>{currentQuestion.question}</h4>
                            <ul>
                                {currentQuestion.options.map((option, index) => (
                                    <li key={index}>
                                        <button onClick={() => handleOptionClick(option)}>
                                            {option}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <h3>Score: {score}</h3>
                        </div>
                    )
                }

            </div>
        );
    }
}

export default QuizContainer;
