import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Home from "./components/Home";

function App() {
  return (
    <div className="App font-clashDisplay m-[4rem]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/features" element={<Features />}/>
      </Routes>
    </div>
  );
}

export default App;
