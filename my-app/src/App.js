import "./App.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainRoutes from "./Routes/MainRoutes";

import Navbar from "./Components/NavBar";


function App() {
  return (
    <div className="App">

      <Navbar />
       <MainRoutes/>
      <Footer/>

      <NavBar />
      <MainRoutes />
      <Footer /> 

    </div>
  );
}

export default App;
