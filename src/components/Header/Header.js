import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/userAvatar.png";

function getDate() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <p>{currentDate}</p>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="WTWR Logo" />
        <p className="header__date">{getDate()}</p>
        <p className="header__location">Current Location</p>
      </div>
      <div className="header__logo">
        <button type="button" className="header__button">
          + Add clothes
        </button>
        <p>Terrence Tegegne</p>
        <img src={avatar} alt="Profile Avatar" />
      </div>
    </header>
  );
}

export default Header;
