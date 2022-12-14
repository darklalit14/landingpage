import "./App.css";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Footer/>
    </div>
  );
}

export default App;
