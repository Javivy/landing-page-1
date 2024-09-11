import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/home/About";
import Pricing from "./components/home/Pricing";
import Features from "./components/home/Features";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App font-clashDisplay mx-auto w-[85%] my-[4rem]">
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
