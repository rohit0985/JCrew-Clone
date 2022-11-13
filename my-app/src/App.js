import "./App.css";

import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainRoutes from "./Routes/MainRoutes";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <div className="App">

      <ChakraProvider><NavBar /></ChakraProvider>

      <MainRoutes />
      <Footer />

    </div>
  );
}

export default App;
