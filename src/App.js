import Intro from "./components/intro/intro.component";
import Quizz from "./components/quizz/quizz.component";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// The optimal way would be to conditional rendering the questions after the Intro button is clicked.
// In this project I want to learn React Routing, so even though is not the best solution, I'll complete it by routing for practice sake.

function App() {
  const [token, setToken] = useState("");
  const [category, setCategory] = useState("9");

  const getSessionToken = () => {
    fetch("https://opentdb.com/api_token.php?command=request")
      .then((response) => response.json())
      .then((data) => setToken(data.token));
  };

  function selectCategory() {
    const selectedCategories = document.querySelector(".settings__categories");
    setCategory(
      selectedCategories.options[selectedCategories.selectedIndex].id
    );
    console.log(category);
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
                selectCategory={selectCategory}
              />
            }
          />
          <Route
            path="quizz"
            element={<Quizz token={token} />}
            category={category}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
