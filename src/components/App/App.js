import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import {
  getForecastWeather,
  parseWeatherTempF,
  parseWeatherLocation,
  parseWeatherTempC,
  getWeatherCondition,
  getCurrentTime,
} from "../../utils/WeatherApi.js";
import {
  getClothingItems,
  postClothingItem,
  likeClothingItem,
  dislikeClothingItem,
  deleteClothingItem,
} from "../../utils/api.js";
import { login, update, register, checkToken } from "../../utils/auth.js";
import Header from "../Header/Header.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import Main from "../Main/Main.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import ItemModal from "../ItemModal/ItemModal.js";
import LoginModal from "../LoginModal/LoginModal.js";
import RegisterModal from "../RegisterModal/RegisterModal.js";
import EditProfileModal from "../EditProfileModal/EditProfileModal.js";
import Profile from "../Profile/Profile.js";
import Footer from "../Footer/Footer.js";
import EditLocationModal from "../EditLocationModal/EditLocationModal.js";

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
  const [coords, changeCoords] = useState({ lat: 26.2517, long: -80.1789 });
  const [weatherCondition, setWeatherCondition] = useState("");
  const [dayTime, setDayTime] = useState(true);
  const [currentTemperatureUnit, changeTempUnit] = useState("°F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory("");

  function fetchClothes() {
    getClothingItems()
      .then((items) => {
        setClothingItems(items.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleToggleSwitchChange() {
    if (currentTemperatureUnit === "°F") {
      changeTempUnit("°C");
    } else if (currentTemperatureUnit === "°C") {
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

  function handleOpenEditModal() {
    openModal("edit");
  }

  function handleOpenLocationEditModal() {
    openModal("location");
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
    setLoading(true);
    postClothingItem(values)
      .then((newItem) => {
        setClothingItems([newItem.data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => {
        console.error(`Unable to add clothing item due to: ${err}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onDeleteItem(cardId) {
    setLoading(true);
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
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const handleCardLike = (_id, isLiked) => {
    isLiked
      ? dislikeClothingItem(_id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === _id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : likeClothingItem(_id)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((c) => (c._id === _id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  function checkTokenSetUser(token) {
    return checkToken(token)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }

  function loginUser(values) {
    setLoading(true);
    login(values)
      .then((res) => {
        handleCloseModal();
        const jwt = res.data;
        localStorage.setItem("jwt", jwt);

        return checkTokenSetUser(jwt);
      })
      .catch((e) => {
        console.error(`Unable to login to user due to: ${e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function updateUser(values) {
    const jwt = localStorage.getItem("jwt");
    setLoading(true);
    update(values, jwt)
      .then((res) => {
        setCurrentUser(res.data);
        handleCloseModal();
      })
      .catch((e) => {
        console.error(`Unable to update user due to ${e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function updateLocation(values) {
    setLoading(true);
  }

  function registerUser(values) {
    setLoading(true);
    register(values)
      .then(() => {
        handleCloseModal();
        loginUser(values);
      })
      .catch((e) => {
        console.error(`Unable to register user due to: ${e}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function logoutUser() {
    localStorage.removeItem("jwt");
    setCurrentUser({});
    setLoggedIn(false);
    history.push("/");
  }

  useEffect(() => {
    getForecastWeather(coords)
      .then((data) => {
        const tempF = parseWeatherTempF(data);
        const tempC = parseWeatherTempC(data);
        const temperature = {
          F: tempF,
          C: tempC,
        };

        setDayTime(getCurrentTime(data));
        setWeatherCondition(getWeatherCondition(data));
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

  // This is currently my issue. An incorrect JWT is being fetched and is throwing an error.
  // Make sure to check the JWT and see if it is correct, and if it is not, ensure the application does not crash.

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt !== null) {
      checkTokenSetUser(jwt).catch((e) => {
        console.error(e);
      });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
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
              weatherCondition={weatherCondition}
              currentTime={dayTime}
              onSelectCard={handleSelectedCard}
              handleOpenItemModal={handleOpenItemModal}
              clothingItems={clothingItems}
              onCardLike={handleCardLike}
              loggedIn={loggedIn}
            />
          </Route>
          <ProtectedRoute path="/profile" loggedIn={loggedIn}>
            <Profile
              onSelectCard={handleSelectedCard}
              handleOpenItemModal={handleOpenItemModal}
              onClick={handleOpenCreateModal}
              onCardLike={handleCardLike}
              loggedIn={loggedIn}
              clothingItems={clothingItems}
              editProfile={handleOpenEditModal}
              editLocation={handleOpenLocationEditModal}
              logout={logoutUser}
            />
          </ProtectedRoute>
        </Switch>
        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            onAddItem={onAddItem}
            loading={loading}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            cardObj={selectedCard}
            onClose={handleCloseModal}
            handleDelete={onDeleteItem}
            loading={loading}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            onClose={handleCloseModal}
            loginUser={loginUser}
            loading={loading}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            registerUser={registerUser}
            openLoginModal={handleOpenLoginModal}
            loading={loading}
          />
        )}
        {activeModal === "edit" && (
          <EditProfileModal
            onClose={handleCloseModal}
            updateUser={updateUser}
            loading={loading}
          />
        )}
        {activeModal === "location" && (
          <EditLocationModal
            onClose={handleCloseModal}
            coords={coords}
            loading={loading}
          />
        )}

        <Footer />
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
