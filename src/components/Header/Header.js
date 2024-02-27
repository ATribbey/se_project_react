import "./Header.css";
import { useContext } from "react";
import logo from "../../images/logo.svg";
import avatar from "../../images/user-avatar.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

function getDate() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return <span>{currentDate}</span>;
}

function Header({ location, onClick, loggedIn, register, login }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className="header__section">
        <Link to="/">
          <img className="header__logo" src={logo} alt="WTWR Logo" />
        </Link>
        <p>
          {getDate()}, {location}
        </p>
      </div>
      <div className="header__section">
        <ToggleSwitch />
        {loggedIn ? (
          <>
            <button type="button" className="header__button" onClick={onClick}>
              + Add clothes
            </button>
            <Link className="header__user-info" to="/profile">
              <p className="header__user-name">{currentUser?.name}</p>
              <img
                className="header__user-avatar"
                src={currentUser?.avatar}
                alt="Profile Avatar"
              />
            </Link>
          </>
        ) : (
          <>
            <button type="button" className="header__button" onClick={register}>
              Sign Up
            </button>
            <button type="button" className="header__button" onClick={login}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
