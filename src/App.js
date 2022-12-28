// import logo from './logo.svg';
// import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { Link, Routes, Route } from 'react-router-dom';
import Abouts from "./pages/Abouts";
import {AiOutlineHome, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineUser} from "react-icons/ai";
import "./pages/style/navBar.css";

function App() {
  return (
    <>
      {/* <nav className="flex justify-around items-center gap-4 text-white bg-[#000eee99]">
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
          <li>
            <Link to="/Portfolio" >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav> */}
      <nav className="shadow min-h-[100vh] p-2">
            <ul className="nav-bar flex flex-col gap-4">
            <li className="px-4 active">
                    <Link to="/" className="flex items-center gap-3">
                      <AiOutlineHome className="w-[25px] h-[25px]" />
                      <span className="hidden md:block">Home</span>
                    </Link>
            </li>
            <li className="px-4">
                <Link to={"/abouts"} className="flex items-center gap-3 whitespace-nowrap">
                    <AiOutlineUser className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">About Me</span>
                </Link>
            </li>
            <li className="px-4">
                <Link to="/contact" className="flex items-center gap-3">
                    <AiOutlineContacts className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">Contact</span>
                </Link>
            </li>
            {/* <li>
                <Link to="/skills" className="flex items-center gap-3">
                    <GiSkills />
                    Skills
                </Link>
            </li> */}
            <li className="px-4">
                <Link to="/portfolio" className="flex items-center gap-3">
                    <AiOutlineFundProjectionScreen className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">portfolio</span>
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
          <Route path="Portfolio" element={<Portfolio />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    {/* </BrowserRouter> */}

    </>
  );
}

export default App;
