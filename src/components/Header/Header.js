import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/user-avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";
import { Link } from "react-router-dom";

function getDate() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return <span>{currentDate}</span>;
}

function Header({ location, onClick }) {
  return (
    <header className="header">
      <div className="header__section">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWR Logo" />
        </Link>
        <p className="header__date">{getDate()}</p>
        <p className="header__location">{location}</p>
      </div>
      <div className="header__section">
        <ToggleSwitch />
        <button type="button" className="header__button" onClick={onClick}>
          + Add clothes
        </button>
        <Link className="header__user-info" to="/profile">
          <p className="header__user-name">Terrence Tegegne</p>
          <img
            className="hedaer__user-avatar"
            src={avatar}
            alt="Profile Avatar"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
