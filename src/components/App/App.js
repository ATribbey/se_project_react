import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";

function App() {
  const weatherTemp = "55°F";
  const modalState = "Hello, I am Modal State";
  function handleCardClick() {
    console.log("Hello, I am Card Click Handler");
  }

  return (
    <>
      <Header />
      <Main
        weatherTemp={weatherTemp}
        modalState={modalState}
        handleCardClick={handleCardClick}
      />
      <Footer />
    </>
  );
}

export default App;
