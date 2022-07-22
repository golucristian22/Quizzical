import "./settings.styles.scss";
import settingsIcon from "../../content/settings-icon.svg";

function Settings(props) {
  const categories = props.categories;
  let categoriesNames;

  if (categories.length > 0) {
    categoriesNames = categories.map((category) => {
      return (
        <option key={category.id} id={category.id} value={category.name}>
          {category.name}
        </option>
      );
    });
  }

  // After the option is selected I need to pass data to the Quizz Component through props from App Component to call the api accordingly
  // The API should be modified to match the selected option
  // https://opentdb.com/api.php?amount=10&category=20&difficulty=medium&type=multiple
  // https://opentdb.com/api.php?amount=10&category={selectedOptionId}&difficulty=medium&type=multiple

  function toggleExtended() {
    const settingsContainer = document.querySelector(".settings__container");
    settingsContainer.classList.toggle("extended");
  }

  return (
    <div className="settings">
      <img
        src={settingsIcon}
        alt="settings"
        className="settings__icon"
        onClick={toggleExtended}
      />
      <div className="settings__container">
        <label className="settings__label" htmlFor="categories">
          Select a category:
        </label>
        <select
          className="settings__categories"
          name="categories"
          id="categories"
          onChange={props.selectCategory}
        >
          {categoriesNames}
        </select>
      </div>
    </div>
  );
}

export default Settings;
