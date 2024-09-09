import "./App.css";
import Countdown from "./components/Countdown";
import HighLight from "./components/HighLight.jsx";
import Hero from "./components/Hero";
import MovingLine from "./components/MovingLine.jsx";
import BehindUS from "./components/BehindUS.jsx";
import Solution from "./components/Solution.jsx";
import Infinight from "./components/Infinight.jsx";
import Organized from "./components/Organized.jsx";
import Footer from "./components/Footer.jsx";
import Timer from "./components/Timer.jsx";
import Tickets from "./components/Tickets.jsx";

function App() {
  return (
    <div className="app">
      <Hero />
      <Countdown />
      <Timer />
      <HighLight />
      <MovingLine />
      <Tickets />
      <BehindUS />
      <Solution />
      <Infinight />
      <Organized />
      <Footer />
    </div>
  );
}

export default App;
