import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/user-avatar.png";

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
        <img src={logo} alt="WTWR Logo" />
        <p className="header__date">{getDate()}</p>
        <p className="header__location">{location}</p>
      </div>
      <div className="header__section">
        <button type="button" className="header__button" onClick={onClick}>
          + Add clothes
        </button>
        <p>Terrence Tegegne</p>
        <img src={avatar} alt="Profile Avatar" />
      </div>
    </header>
  );
}

export default Header;
