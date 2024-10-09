import React from 'react';

const quizQuestions = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        answer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        answer: 'Mars'
    },
    {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Whale', 'Shark', 'Dinosaur'],
        answer: 'Whale'
    }
];

class QuizApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentQuestionIndex: 0,  // Keeps track of the current question
            userAnswers: [],          // Stores user's answers
            score: 0,                 // Tracks the user's score
            quizFinished: false       // Flag to indicate the end of the quiz
        };
        console.log("Constructor was called");
    }

    handleAnswerClick = (selectedOption) => {
        const { currentQuestionIndex, userAnswers, score } = this.state;
        const correctAnswer = quizQuestions[currentQuestionIndex].answer;

        // Check if the selected option is correct and update the score
        let updatedScore = score;
        if (selectedOption === correctAnswer) {
            updatedScore += 1;
        }

        this.setState({
            userAnswers: [...userAnswers, selectedOption],
            currentQuestionIndex: currentQuestionIndex + 1,
            score: updatedScore
        });

        if (currentQuestionIndex + 1 === quizQuestions.length) { // On last question
            this.setState({ quizFinished: true });
        }
    };

    // Restart the quiz
    restartQuiz = () => {
        this.setState({
            currentQuestionIndex: 0,
            userAnswers: [],
            score: 0,
            quizFinished: false,
        });
        // this.componentDidMount();
    };

    componentDidUpdate() {
        const scoreDot = document.createElement('div');
        let sdstyles = scoreDot.style;
        sdstyles.width = '20px';
        sdstyles.height = '20px';
        sdstyles.borderRadius = '50%';
        sdstyles.backgroundColor = 'green'

        document.getElementById('quizContainer')?.appendChild(scoreDot);

        console.log("componentDidUpdate was called");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount was called")
    }
    componentDidMount() {
        console.log("componentDidMount was called");
    }

    render() {
        const { currentQuestionIndex, score, quizFinished } = this.state;
        console.log("render was called")

        if (quizFinished) {
            // this.componentDidUpdate();
            return (
                <div className="quiz-container">
                    <h2>Quiz Finished!</h2>
                    <p>Your score: {score} / {quizQuestions.length}</p>
                    <button onClick={this.restartQuiz}>Restart Quiz</button>
                </div>
            );
        }

        const currentQuestion = quizQuestions[currentQuestionIndex];

        return (
            <div id="quizContainer" className="quiz-container">
                <h2>Question {currentQuestionIndex + 1}:</h2>
                <p>{currentQuestion.question}</p>
                <ul>
                    {currentQuestion.options.map((option, index) => (
                        <li key={index}>
                            <button onClick={() => this.handleAnswerClick(option)}>
                                {option}
                            </button>
                        </li>
                    ))}
                </ul>
                <p>Score: {score}</p>
            </div>
        );
    }
}

export default QuizApp;
