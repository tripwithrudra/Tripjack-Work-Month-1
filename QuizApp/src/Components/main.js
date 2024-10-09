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
        }
    }

    componentDidMount() {
        let updatedTotalScore = 0;
        questions.map((item, index) => {
            updatedTotalScore += item.marks
        })
        this.setState({
            totalScore: updatedTotalScore
        })
    }

    // calculateTotalScore = () => {
    //     console.log('calculateTotalScore called ...')
    //     questions.map((item, index) => {
    //         this.setState({
    //             totalScore: this.state.totalScore + item.marks
    //         })
    //     })
    //     console.log("totalscore : ",this.state.totalScore);
    //     // return this.state.totalScore;
    // }

    handleOptionClick = (selectedOption) => {
        const { currentQuestionIndex, score } = this.state;
        const currentQuestion = questions[currentQuestionIndex]

        let updatedScore = score;
        if (selectedOption === currentQuestion.answer) {
            updatedScore += currentQuestion.marks;
        }

        if (currentQuestionIndex + 1 === questions.length) {
            this.setState({
                quizCompleted: true,
                score: updatedScore
            })
        }
        else {
            this.setState({
                currentQuestionIndex: currentQuestionIndex + 1,
                score: updatedScore
            })
        }
    }

    restartQuiz() {
        this.setState({
            currentQuestionIndex: 0,
            score: 0,
            quizCompleted: false
        })
    }


    render() {
        console.log("Render was called!");
        const { score, currentQuestionIndex, quizCompleted, totalScore } = this.state;

        if (quizCompleted) {
            return (

                <div className="quiz-container">
                    <h2>Quiz Completed</h2>
                    <p>Score: {score} / {totalScore}</p>
                    <button
                        onClick={() => this.restartQuiz()}
                    >Restart
                    </button>
                </div>
            )
        }

        const currentQuestion = questions[currentQuestionIndex];
        return (
            <QuizContainer currentQuestionIndex={currentQuestionIndex} currentQuestion={currentQuestion} score={score} handleOptionClick={this.handleOptionClick} />
        )
    }
}

export default MainQuiz