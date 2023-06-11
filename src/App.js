import "./App.css";
import { Route, Routes } from "react-router-dom";

import NavBar from "./component/NavBar";

import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import Service from "./Pages/ServicePage";
import ContactPage from "./Pages/ContactPage";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/usluge" element={<Service />} />
        <Route index path="/onama" element={<AboutPage />} />
        <Route index path="/kontakt" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
                  