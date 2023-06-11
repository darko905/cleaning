import Hero from "../component/Hero";
import Plan from "../component/Plan";
import Counter from "../component/Counter";
import Steps from "../component/Steps";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import AboutLider from "../component/AboutLider";



const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Plan />
        <AboutLider />      
        <Counter />
        <Steps />
        <Banner />
        <Footer />
      </div>
    </>
  );
};

export default Home;
