import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import "./pages/style/navBar.css";
import { LeftNavbar } from "./pages/LeftNavbar";

function App() {

 

  return (
    <>
      <LeftNavbar />

      <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Portfolio" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;