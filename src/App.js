import Intro from "./components/intro/intro.component";
import Quizz from "./components/quizz/quizz.component";
import { useState, useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [token, setToken] = useState("");
  const [questions, setQuestions] = useState([]);
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("easy");
  const [category, setCategory] = useState("");

  const getSessionToken = () => {
    fetch("https://opentdb.com/api_token.php?command=request")
      .then((response) => response.json())
      .then((data) => setToken(data.token));
  };

  function getQuestions() {
    fetch(
      `https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple&token=${token}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => setQuestions(data.results));
  }

  function selectCategory() {
    const selectedCategories = document.querySelector(".settings__categories");
    setCategory(
      selectedCategories.options[selectedCategories.selectedIndex].id
    );
  }

  useLayoutEffect(getQuestions, [
    category,
    difficulty,
    numberOfQuestions,
    token,
  ]);

  return (
    <div className="quizzical__container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Intro
                getSessionToken={getSessionToken}
                setNumberOfQuestions={setNumberOfQuestions}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                selectCategory={selectCategory}
              />
            }
          />
          <Route
            path="quizz"
            element={
              <Quizz
                token={token}
                questions={questions}
                getQuestions={getQuestions}
                category={category}
                difficulty={difficulty}
                numberOfQuestions={numberOfQuestions}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
