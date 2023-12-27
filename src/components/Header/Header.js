import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <>
      <img src={logo} alt="WTWR Logo" />
      <div>{getTime}</div>
      <div>Current Location</div>
      <button>Add New Clothes</button>
      <div>User Name</div>
      <div>User Avatar</div>
    </>
  );
}

function getTime() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return currentDate;
}

export default Header;
