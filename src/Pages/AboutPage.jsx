import React, { useEffect, useState } from "react";
import About from "../component/About";
import HeroPages from "../component/HeroPages";
import Steps from "../component/Steps";
import Footer from "../component/Footer";
import Logo from "../images/Logo/Logo-text.png";

const AboutPage = () => {
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
          <section className="section">
            <HeroPages name="O nama" />
            <About />
            <Steps />
            <Footer />
          </section>
        </>
      )}
      ;
    </>
  );
};

export default AboutPage;
