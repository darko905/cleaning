import './App.css';
import About from './component/About';
import Counter from './component/Counter';
import Hero from './component/Hero';
import NavBar from './component/NavBar';
import Plan from './component/Plan';
import Service from './component/Service';

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Plan/>
      <About/>
      <Service/>
      <Counter/>
    </>
  );
}

export default App;
