// import './App.css';
import PieChart from './bublDiagram/PieChart';
import HeroSection from './header/HeroSection';
import Slider from "./Slider/Slider.js"
import Footer from './Footer/Footer';
function App() {
  return (
    <div className="App">
        <HeroSection/>
        <PieChart/>
        <Slider/>
        <Footer/>
    </div>
  );
}

export default App;
