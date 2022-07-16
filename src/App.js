import Intro from "./components/intro/intro.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="quizzical__container">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/" element={<Intro />} />
      </Routes>
    </div>
  );
}

export default App;
