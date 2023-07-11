import './App.css';
import {AboutMe, Footer, Hero, Navbar, Projects, Technologies} from './components';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      <Technologies/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
