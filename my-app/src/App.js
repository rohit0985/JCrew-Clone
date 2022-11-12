
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainRoutes from "./Routes/MainRoutes";
import Recomended from "./Components/Recomended";
import ShopStories from "./Components/ShopStories";
import MoreYouNeed from "./Components/MoreYouNeed";
import ProductBanner from "./Components/ProductBanner";

import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import MainRoutes from './Routes/MainRoutes';
import SingleProductCard from './Components/SingleProductCard';
import Men from './Pages/Men/Men';
import Navbar from './Components/Navbar';
import HomePage from './Components/HomePage';



function App() {
  return (
    <div className="App">
      <NavBar />
       <MainRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
