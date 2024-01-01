import "./App.css";
import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm.js";
import Footer from "../Footer/Footer.js";

const weatherTemp = "55°F";
const modalState = "Hello, I am Modal State";
function handleCardClick() {
  console.log("Hello, I am Card Click Handler");
}

function App() {
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
        buttonText="Add Garment"
      >
        <h2 className="modal__input-title">Name</h2>
        <input
          className="modal__input"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <h2 className="modal__input-title">Image</h2>
        <input
          className="modal__input"
          type="url"
          name="url"
          placeholder="Image URL"
          required
        />
      </ModalWithForm>
      <Footer />
    </>
  );
}

export default App;
