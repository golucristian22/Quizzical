import Intro from "./components/intro/intro.component";
import Quizz from "./components/quizz/quizz.component";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="quizzical__container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/quizz" element={<Quizz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
