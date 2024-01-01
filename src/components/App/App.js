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
        <fieldset className="modal__radio">
          <h2 className="modal__input-title">Select the weather type:</h2>
          <input type="radio" id="hot" className="modal__radio-button" />
          <label for="hot"> Hot</label>
          <br />
          <input type="radio" id="warm" className="modal__radio-button" />
          <label for="warm"> Warm</label>
          <br />
          <input type="radio" id="cold" className="modal__radio-button" />
          <label for="cold"> Cold</label>
        </fieldset>
      </ModalWithForm>
      <Footer />
    </>
  );
}

export default App;
