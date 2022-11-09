import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainRoutes from "./Routes/MainRoutes";
import Recomended from "./Components/Recomended";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainRoutes />
      <Footer />
      <Recomended />
    </div>
  );
}

export default App;
