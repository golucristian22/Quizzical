import "./quizz.styles.scss";
import { useState, useEffect } from "react";

const Quizz = () => {
  const [questions, setQuestions] = useState([]);

  function getQuestions() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }

  console.log(questions);

  useEffect(getQuestions, []);

  // Get questions answers in an array.
  // Randomise the array.
  // Generate the answers.
  const questionsElements = questions.map((question, index) => {
    const questionsAnswers = [
      ...question.incorrect_answers,
      question.correct_answer,
    ];
    console.log(questionsAnswers);
    return (
      <div className="quizz__question" key={index}>
        <h3 className="question__heading">{question.question}</h3>
        <div className="question__answers-container">
          {questionsAnswers.map((answer, index) => {
            return (
              <div className="question__answer" key={index}>
                {answer}
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  return (
    <div className="quizz">
      {questionsElements}
      <div className="quizz__btn-container">
        <button className="quizz__btn" onClick={getQuestions}>
          Check Answers
        </button>
      </div>
    </div>
  );
};

export default Quizz;
