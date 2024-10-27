import React from 'react'
import questions from '../Constants/questions';
import QuizContainer from './QuizContainer';

class MainQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            totalScore: 0,
            currentQuestionIndex: 0,
            quizCompleted: false,
            name: "",
            nameEntered: false
        };
        this.handleOptionClick = this.handleOptionClick.bind(this);
        console.log(this.state.score);

    }

    componentDidMount() {
        console.log("componentDidMount was called !!!!")
        let updatedTotalScore = 0;
        questions.forEach(item => {
            updatedTotalScore += item.marks;
        });
        this.setState({
            totalScore: updatedTotalScore
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Next Props: ", nextProps);
        console.log("Next State", nextState);
        return true; r
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.currentQuestionIndex !== this.state.currentQuestionIndex) {
            console.log("Snapshot: Moving to the next question..........");
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // extra props added for understanding
        console.log({ prevState })
        if (prevState.currentQuestionIndex !== this.state.currentQuestionIndex) {
            console.log("Component Updated! New question.");
        }
    }

    componentWillUnmount() {
        console.log("main component is removed from DOM");
    }

    handleOptionClick(selectedOption) {
        const { currentQuestionIndex, score } = this.state;
        const currentQuestion = questions[currentQuestionIndex];

        let updatedScore = score;
        if (selectedOption === currentQuestion.answer) {
            updatedScore += currentQuestion.marks;
        }

        if (currentQuestionIndex + 1 === questions.length) {
            this.setState({
                quizCompleted: true,
                score: updatedScore
            });
        } else {
            this.setState({
                currentQuestionIndex: currentQuestionIndex + 1,
                score: updatedScore
            });
        }
    }

    restartQuiz = () => {
        this.setState({
            currentQuestionIndex: 0,
            score: 0,
            quizCompleted: false
        });
    }

    handleNameChange = (e) => {
        const { value = '' } = e.target;

        console.log({ value })
        this.setState({
            name: value
        })
    }

    render() {
        const { score, currentQuestionIndex, quizCompleted, totalScore, name, nameEntered } = this.state;

        if (quizCompleted) {
            return (
                <div className="quiz-container">
                    <h2>Quiz Completed</h2>
                    <p>Score: {score} / {totalScore}</p>
                    <button onClick={this.restartQuiz}>Restart</button>
                </div>
            );
        }

        const currentQuestion = questions[currentQuestionIndex];
        return (
            <>
                {
                    !nameEntered && (<div style={{ margin: "0 2rem" }} >
                        <label htmlFor="name">Name: </label>
                        <input id="name" type="text" onChange={this.handleNameChange} />
                        <button onClick={() => {
                            this.setState({
                                nameEntered: true
                            })
                        }}>
                            Insert
                        </button>
                    </div>
                    )
                }

                <QuizContainer
                    currentQuestionIndex={currentQuestionIndex}
                    currentQuestion={currentQuestion}
                    score={score}
                    handleOptionClick={this.handleOptionClick}
                    name={name}
                    nameEntered={nameEntered}
                />
            </>
        );
    }
}

export default MainQuiz;