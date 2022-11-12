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
      <Navbar/>
      {/* <Navbar/> */}
      {/* <MainRoutes/>
    
      <Men/> */}
     <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
