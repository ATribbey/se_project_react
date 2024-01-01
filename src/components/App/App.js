import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import Footer from "../Footer/Footer.js";

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
      <ModalWithForm
        name="add-new-garment"
        title="New Garment"
        buttonText="Add New garment"
      >
        Hello I am Children
      </ModalWithForm>
      <Footer />
    </>
  );
}

export default App;
