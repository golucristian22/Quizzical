import "./intro.styles.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Settings from "../settings/settings.component.jsx";

function Intro(props) {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((response) => response.json())
      .then((data) => setCategories(data.trivia_categories));
  }, []);
  // console.log(categories);

  // const categoriesName = categories.map((category) => category.name);
  // console.log(categoriesName);

  return (
    <div className="intro">
      <Settings categories={categories} />
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
