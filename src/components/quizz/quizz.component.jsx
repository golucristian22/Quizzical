import "./quizz.styles.scss";
import { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";

const Quizz = (props) => {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function selectAnswer(e) {
    // Select an answer
    const selectedAnswer = e.target;
    // Select all answers from the same question
    const selectAllQuestionAnswers = document.querySelectorAll(
      `.${selectedAnswer.classList[1]}`
    );
    selectAllQuestionAnswers.forEach((answer) => {
      answer.classList.remove("question__answer--selected");
    });
    selectedAnswer.classList.add("question__answer--selected");
  }

  function checkAnswers() {
    // Select all questions
    const allQuestions = document.querySelectorAll(".quizz__question");
    for (let i = 0; i < allQuestions.length; i++) {
      // Select all answers for a question
      const allQuestionAnswers = document.querySelectorAll(
        `.answer-to-question-${i}`
      );
      // Loop through each answer to check if it's true or false to add the specific class
      allQuestionAnswers.forEach((questionAnswer) => {
        questionAnswer.classList.add("question__answer--disabled");
        if (questionAnswer.classList.contains("question__answer--selected")) {
          const correctAnswer = props.questions[i].correct_answer;
          if (questionAnswer.innerText === correctAnswer) {
            questionAnswer.classList.add("question__answer--correct");
            setScore((prevScore) => (prevScore = prevScore + 1));
          } else {
            questionAnswer.classList.add("question__answer--wrong");
            // Loop again through all answers to show the correct one.
            allQuestionAnswers.forEach((questionAnswer2) => {
              if (questionAnswer2.innerText === correctAnswer) {
                questionAnswer2.classList.add("question__answer--correct");
              }
            });
          }
        }
        setGameOver(true);
      });
    }
  }

  function resetGame() {
    props.getQuestions();
    placeLoadingScreen();
    setGameOver(false);
    setScore(0);
    const allAnswers = document.querySelectorAll(".question__answer");
    allAnswers.forEach((answer) => {
      answer.classList.remove(
        "question__answer--disabled",
        "question__answer--selected",
        "question__answer--correct",
        "question__answer--wrong"
      );
    });
  }

  function placeLoadingScreen() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }

  useEffect(placeLoadingScreen, []);

  function decodeHtml(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  const questionsElements = props.questions.map((question, questionIndex) => {
    const questionsAnswers = [
      ...question.incorrect_answers,
      question.correct_answer,
    ].sort(); // sort them because the correct answer is always at the end & random order is bugged due to rerendering

    return (
      <div
        className={`quizz__question question-${questionIndex}`}
        key={questionIndex}
      >
        <h3 className="question__heading">{decodeHtml(question.question)}</h3>
        <div className="question__answers-container">
          {questionsAnswers.map((answer, answerIndex) => {
            return (
              <div
                className={`question__answer ${`answer-to-question-${questionIndex}`}`}
                key={answerIndex}
                onClick={selectAnswer}
              >
                {decodeHtml(answer)}
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="quizz">
      {loading ? (
        <>
          <PulseLoader
            color="#999"
            loading={loading}
            margin={5}
            size={10}
            speedMultiplier={0.7}
          />
        </>
      ) : (
        <>
          {props.questions.length > 1 ? questionsElements : ""}
          <div className="quizz__btn-container">
            {gameOver && (
              <p className="quizz__score">
                You scored {`${score}/${props.questions.length}`} correct
                answers
              </p>
            )}
            {gameOver ? (
              <button className="quizz__btn" onClick={resetGame}>
                Play Again
              </button>
            ) : (
              <button className="quizz__btn" onClick={checkAnswers}>
                Check Answers
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quizz;
