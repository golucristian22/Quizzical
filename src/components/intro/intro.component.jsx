import "./intro.styles.scss";
import { Link } from "react-router-dom";

function Intro(props) {
  return (
    <div className="intro">
      <h1 className="intro__heading">Quizzical</h1>
      <p className="intro__description">Test Your Knowledge!</p>
      <Link to={"quizz"}>
        <button
          className="intro__btn btn btn--primary"
          onClick={props.getSessionToken}
        >
          Start Quizz
        </button>
      </Link>
    </div>
  );
}

export default Intro;
