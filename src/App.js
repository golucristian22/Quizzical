import Intro from "./components/intro/intro.component";
import Quizz from "./components/quizz/quizz.component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// The optimal way would be to conditional rendering the questions after the Intro button is clicked.
// In this project I want to learn React Routing, so even though is not the best solution, I'll complete it by routing for practice sake.

function App() {
  return (
    <div className="quizzical__container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="quizz" element={<Quizz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
