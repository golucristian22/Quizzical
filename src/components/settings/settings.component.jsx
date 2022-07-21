import "./settings.styles.scss";
import settingsIcon from "../../content/settings-icon.svg";

function Settings(props) {
  const categories = props.categories;
  let categoriesNames;
  if (categories.length > 0) {
    categoriesNames = categories.map((category) => {
      return <option value={category.name}>{category.name}</option>;
    });
  }

  function toggleExtended(e) {
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
        >
          {categoriesNames}
        </select>
      </div>
    </div>
  );
}

export default Settings;
