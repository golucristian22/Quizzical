import "./quizz.styles.scss";
import { useState, useEffect } from "react";

const Quizz = () => {
  const [questions, setQuestions] = useState([]);

  function getQuestions() {
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => setQuestions(data.results));
  }

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
        if (questionAnswer.classList.contains("question__answer--selected")) {
          const correctAnswer = questions[i].correct_answer;
          if (questionAnswer.innerText === correctAnswer) {
            questionAnswer.classList.add("question__answer--correct");
          } else {
            questionAnswer.classList.add("question__answer--wrong");
            // Loop again through all answers to show the correct one.
            allQuestionAnswers.forEach((questionAnswer) => {
              if (questionAnswer.innerText === correctAnswer) {
                questionAnswer.classList.add("question__answer--correct");
              }
            });
          }
        }
      });
    }
  }

  console.log(questions);

  useEffect(getQuestions, []);

  const questionsElements = questions.map((question, questionIndex) => {
    const questionsAnswers = [
      ...question.incorrect_answers,
      question.correct_answer,
    ];

    // Generates random order since the correct answer is always the last.
    questionsAnswers.sort(() => Math.random() - 0.5);

    return (
      <div
        className={`quizz__question question-${questionIndex}`}
        key={questionIndex}
      >
        <h3 className="question__heading">{question.question}</h3>
        <div className="question__answers-container">
          {questionsAnswers.map((answer, answerIndex) => {
            return (
              <div
                className={`question__answer ${`answer-to-question-${questionIndex}`}`}
                key={answerIndex}
                onClick={selectAnswer}
              >
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
        <button className="quizz__btn" onClick={checkAnswers}>
          Check Answers
        </button>
      </div>
    </div>
  );
};

export default Quizz;
