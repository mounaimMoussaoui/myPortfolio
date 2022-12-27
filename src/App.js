// import logo from './logo.svg';
// import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import About from "./pages/Abouts";
import { Link, Routes, Route } from 'react-router-dom';
import Abouts from "./pages/Abouts";

function App() {
  return (
    <>
      <nav className="flex justify-around items-center gap-4 text-white bg-[#000eee99]">
        <ul className="flex gap-4 items-center justify-between p-2">
          <li>
            <Link to="/" >
              Home
            </Link>
          </li>
          <li>
            <Link to="/Contact" >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/Abouts" >
              Abouts
            </Link>
          </li>
        </ul>
      </nav>

    {/* <BrowserRouter> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="Abouts" element={<Abouts />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    {/* </BrowserRouter> */}

    </>
  );
}

export default App;
