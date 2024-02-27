import "./App.css";
import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { CurrentTempUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import {
  getForecastWeather,
  parseWeatherTempF,
  parseWeatherLocation,
  parseWeatherTempC,
} from "../../utils/WeatherApi.js";
import {
  getClothingItems,
  postClothingItem,
  deleteClothingItem,
} from "../../utils/api.js";
import { login, register, checkToken } from "../../utils/auth.js";
import Header from "../Header/Header.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import Main from "../Main/Main.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import ItemModal from "../ItemModal/ItemModal.js";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import Profile from "../Profile/Profile.js";
import Footer from "../Footer/Footer.js";

/* 
- For future reference:
  - To run this application, do the following: 
    - Run React application using npm start in terminal
    - Run Express application using commands mentioned inside of instructions file
    - Run Server using the following command in terminal: 
      - 'C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe' --dbpath='c:\data\db'
*/

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, changeTemp] = useState(0);
  const [location, changeLocation] = useState("");
  const [currentTempUnit, changeTempUnit] = useState("°F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  function fetchClothes() {
    getClothingItems()
      .then((items) => {
        setClothingItems(items.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleSwitchChange() {
    if (currentTempUnit === "°F") {
      changeTempUnit("°C");
    } else if (currentTempUnit === "°C") {
      changeTempUnit("°F");
    }
  }

  function openModal(modalType) {
    setActiveModal(modalType);
    document.addEventListener("keyup", handleEscapeClose);
    document.addEventListener("click", handleClickClose);
  }

  function handleOpenCreateModal() {
    openModal("create");
  }

  function handleOpenItemModal() {
    openModal("preview");
  }

  function handleOpenLoginModal() {
    openModal("login");
  }

  function handleOpenRegisterModal() {
    openModal("register");
  }

  function handleCloseModal() {
    setActiveModal("");
    document.removeEventListener("keyup", handleEscapeClose);
    document.removeEventListener("click", handleClickClose);
  }

  const handleEscapeClose = useCallback(
    (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    },
    // eslint-disable-next-line
    []
  );

  const handleClickClose = useCallback(
    (event) => {
      if (event.target.classList.contains("modal")) {
        handleCloseModal();
      }
    },
    // eslint-disable-next-line
    []
  );

  function handleSelectedCard(card) {
    setSelectedCard(card);
  }

  function onAddItem(values) {
    postClothingItem(values)
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(`Unable to add clothing item due to: ${err}`);
      });
  }

  function onDeleteItem(cardId) {
    deleteClothingItem(cardId)
      .then(() => {
        const newArr = clothingItems.filter((card) => {
          return card._id !== cardId;
        });
        setClothingItems(newArr);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(`Unable to delete clothing item due to: ${err}`);
      });
  }

  function loginUser(values) {
    login(values)
      .then((res) => {
        setLoggedIn(true);
        handleCloseModal();
        localStorage.setItem("jwt", res.data);
      })
      .catch((e) => {
        console.error(`Unable to login to user due to: ${e}`);
      });
  }

  function registerUser(values) {
    register(values)
      .then(() => {
        handleCloseModal();
        loginUser(values);
      })
      .catch((e) => {
        console.error(`Unable to register user due to: ${e}`);
      });
  }

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const tempF = parseWeatherTempF(data);
        const tempC = parseWeatherTempC(data);
        const temperature = {
          F: tempF,
          C: tempC,
        };
        changeTemp(temperature);
        const locale = parseWeatherLocation(data);
        changeLocation(locale);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    fetchClothes();
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");

    checkToken(jwt)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res.data);
      })
      .catch(() => {
        return;
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTempUnitContext.Provider
        value={{ currentTempUnit, handleSwitchChange }}
      >
        <Header
          location={location}
          onClick={handleOpenCreateModal}
          loggedIn={loggedIn}
          register={handleOpenRegisterModal}
          login={handleOpenLoginModal}
        />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              handleOpenItemModal={handleOpenItemModal}
              clothingItems={clothingItems}
            />
          </Route>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              onSelectCard={handleSelectedCard}
              handleOpenItemModal={handleOpenItemModal}
              onClick={handleOpenCreateModal}
              clothingItems={clothingItems}
            />
          </ProtectedRoute>
        </Switch>
        {activeModal === "create" && (
          <AddItemModal onClose={handleCloseModal} onAddItem={onAddItem} />
        )}
        {activeModal === "preview" && (
          <ItemModal
            cardObj={selectedCard}
            onClose={handleCloseModal}
            handleDelete={onDeleteItem}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            onClose={handleCloseModal}
            loginUser={loginUser}
          ></LoginModal>
        )}
        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            registerUser={registerUser}
          ></RegisterModal>
        )}

        <Footer />
      </CurrentTempUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
