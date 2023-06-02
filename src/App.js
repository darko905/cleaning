import './App.css';
import About from './component/About';
import Banner from './component/Banner';
import Choose from './component/Choose';
import Counter from './component/Counter';
import Gallery from './component/Gallery';
import Hero from './component/Hero';
import NavBar from './component/NavBar';
import Plan from './component/Plan';
import Service from './component/Service';
import Steps from './component/Steps';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Plan/>
      <About/>
      <Service/>
      <Counter/>
      <Gallery/>
      <Steps/>
      <Banner/>
      <Choose/>
    </>
  );
}

export default App;
