import React, { useEffect, useState } from 'react'
import Hero from '../component/Hero'
import Plan from '../component/Plan'
import About from '../component/About'
import Counter from '../component/Counter'
import Steps from '../component/Steps'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Logo from "../images/Logo/Logo-text.png";

const Home = () => {
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
    <div>
      <Hero/>
      <Plan/>
      <About/>
      <Counter/>
      <Steps/>
      <Banner/>
      <Footer/>
    </div>
    </>
    )}
    ;
  </>
  )
}

export default Home
