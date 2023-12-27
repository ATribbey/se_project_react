import "./Header.css";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <>
      <img src={logo} alt="WTWR Logo" />
      <div>Current Time</div>
      <div>Current Location</div>
      <button>Add New Clothes</button>
      <div>User Name</div>
      <div>User Avatar</div>
    </>
  );
}

export default Header;
