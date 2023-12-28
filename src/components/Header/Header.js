import "./Header.css";
import logo from "../../images/logo.svg";
import avatar from "../../images/userAvatar.png";

function getTime() {
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
        <div>{getTime()}</div>
        <div>Current Location</div>
      </div>
      <div className="header__logo">
        <button type="button" className="header__button">
          + Add clothes
        </button>
        <div>Terrence Tegegne</div>
        <img src={avatar} alt="Profile Avatar" />
      </div>
    </header>
  );
}

export default Header;
