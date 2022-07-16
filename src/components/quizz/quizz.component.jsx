import "./quizz.styles.scss";

const Quizz = () => {
  return (
    <div className="quizz">
      <div className="quizz__question">
        <h3 className="question__heading">
          How would one say goodbye in Spanish?
        </h3>
        <div className="question__answers-container">
          <div className="question__answer question__answer--selected">
            Adios
          </div>
          <div className="question__answer">Hola</div>
          <div className="question__answer">Au Revoir</div>
          <div className="question__answer">Salir</div>
        </div>
      </div>
      <div className="quizz__question">
        <h3 className="question__heading">
          Which best selling toy of 1983 caused hysteria, resulting in riots
          breaking in stores?
        </h3>
        <div className="question__answers-container">
          <div className="question__answer question__answer--correct">
            Cabbage Patch Kids
          </div>
          <div className="question__answer">Transformers</div>
          <div className="question__answer">Care Bears</div>
          <div className="question__answer">Rubik'k Cube</div>
        </div>
      </div>
      <div className="quizz__question">
        <h3 className="question__heading">
          What is the hottest planet in our Solar System?
        </h3>
        <div className="question__answers-container">
          <div className="question__answer">Mercury</div>
          <div className="question__answer question__answer--selected">
            Venus
          </div>
          <div className="question__answer">Mars</div>
          <div className="question__answer">Saturn</div>
        </div>
      </div>
      <div className="quizz__question">
        <h3 className="question__heading">
          In which country was the caesar salad invented?
        </h3>
        <div className="question__answers-container">
          <div className="question__answer">Itlay</div>
          <div className="question__answer question__answer--selected">
            Portugal
          </div>
          <div className="question__answer">Mexico</div>
          <div className="question__answer">France</div>
        </div>
      </div>
      <div className="quizz__btn-container">
        <button className="quizz__btn">Check Answers</button>
      </div>
    </div>
  );
};

export default Quizz;
