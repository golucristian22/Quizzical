import Intro from "./components/intro/intro.component";
import Quizz from "./components/quizz/quizz.component";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Set a default state with 10 numbers
// This state can change through a function
function App() {
  const [token, setToken] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState("medium");
  console.log(difficulty, numberOfQuestions);
  const [category, setCategory] = useState("");

  const getSessionToken = () => {
    fetch("https://opentdb.com/api_token.php?command=request")
      .then((response) => response.json())
      .then((data) => setToken(data.token));
  };

  function selectByValue(event, setSelectionState) {
    // Find out which selection was changed
    // setState to the correct selection with it's option value
    const target = event.target;
    console.log(target);
    setSelectionState(target.options[target.selectedIndex].value);
  }

  function selectCategory() {
    const selectedCategories = document.querySelector(".settings__categories");
    setCategory(
      selectedCategories.options[selectedCategories.selectedIndex].id
    );
  }

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
