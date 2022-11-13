import "./App.css";

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainRoutes from "./Routes/MainRoutes";
import { ChakraProvider } from "@chakra-ui/react";



function App() {
  return (
    <div className="App">

      <ChakraProvider><Navbar /></ChakraProvider>

      <MainRoutes />
      <Footer />

    </div>
  );
}

export default App;
