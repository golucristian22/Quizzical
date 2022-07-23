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
        <div className="settings__option-container">
          <label className="settings__label" htmlFor="categories">
            Select a category:
          </label>
          <select
            className="settings__selection settings__categories"
            name="categories"
            id="categories"
            onChange={props.selectCategory}
          >
            {categoriesNames}
          </select>
        </div>
        <div className="settings__option-container">
          <label className="settings__label" htmlFor="numberOfQuestions">
            How many question?
          </label>
          <input
            type="number"
            placeholder="10"
            min="1"
            max="10"
            className="settings__input"
            onChange={(e) => props.setNumberOfQuestions(e.target.value)}
          />
        </div>
        <div className="settings__option-container">
          <label className="settings__label" htmlFor="categories">
            Select the questions difficulty:
          </label>
          <select
            className="settings__selection"
            name="difficulty"
            id="difficulty"
            onChange={(e) =>
              props.setDifficulty(
                e.target.options[e.target.selectedIndex].value
              )
            }
          >
            <option value="" disabled selected></option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Settings;
