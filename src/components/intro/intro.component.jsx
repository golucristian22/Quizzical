import "./intro.styles.scss";

function Intro() {
  return (
    <div className="intro">
      <h1 className="intro__heading">Quizzical</h1>
      <p className="intro__description">Test Your Knowledge!</p>
      <button className="intro__btn btn btn--primary">Start quiz</button>
    </div>
  );
}

export default Intro;
