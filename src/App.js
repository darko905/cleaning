import './App.css';
import { Route, Routes } from "react-router-dom";

import NavBar from './component/NavBar';

import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import Service from './Pages/ServicePage';
import ContactPage from './Pages/ContactPage';
import { useEffect, useState } from 'react';
import Logo from '../src/images/Logo/Logo-text.png';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
    {loading ? (
      <div className="loader-clean">
        <img src={Logo} alt="Logo" />
      </div>
    ) : (
      <>
        <NavBar/>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route index path="/about" element={<AboutPage/>} />
          <Route index path="/service" element={<Service/>} />
          <Route index path="/contact" element={<ContactPage/>} />
        </Routes>
      </>
    )}
    </>
  );
}

export default App;
