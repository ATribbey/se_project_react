import "./App.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Main from "../Main/Main.js";

function App() {
  const weatherTemp = "55°F";
  return (
    <>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
    </>
  );
}

export default App;
