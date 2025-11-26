import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { Link, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import {AiOutlineHome, AiOutlineSetting, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineUser} from "react-icons/ai";
import "./pages/style/navBar.css";

function App() {

  const showSetting = (e) => {
    if(e.currentTarget.getAttribute("id")=== "btnStyle") {
      e.currentTarget.classList.toggle("clicked");
      let list = document.getElementById("sitting");
        ["opacity-[0]", "-left-[10px]"].forEach(cls => list.classList.toggle(cls));
        ["opacity-[1]", "left-[10px]"].forEach(cls => list.classList.toggle(cls));
      }
    }

  const handleActive = (e) => {
    const listLi = e.currentTarget.parentElement.children;
    [...listLi].forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  }

  return (
    <>
      <nav className="shadow min-h-[100vh] p-2 bg-[#253f56] w-[60px] md:w-[170px] relative navBar">
          <ul className="nav-bar flex flex-col gap-4 relative text-[#fff]">
            <li className="md:px-4 active" onClick={handleActive}>
                    <Link to="/" className="flex items-center md:gap-3">
                      <AiOutlineHome className="w-[25px] h-[25px]" />
                      <span className="hidden md:block">Home</span>
                    </Link>
            </li>
            <li className="md:px-4" onClick={handleActive}>
                <Link to={"/about"} className="flex items-center md:gap-3 whitespace-nowrap">
                    <AiOutlineUser className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">About Me</span>
                </Link>
            </li>
            <li className="md:px-4" onClick={handleActive}>
                <Link to="/contact" className="flex items-center md:gap-3">
                    <AiOutlineContacts className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">Contact</span>
                </Link>
            </li>
            <li className="md:px-4" onClick={handleActive}>
                <Link to="/portfolio" className="flex items-center md:gap-3">
                    <AiOutlineFundProjectionScreen className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">portfolio</span>
                </Link>
            </li>
            <li className="md:px-4 relative" id="btnStyle" onClick={(e) => showSetting(e)}>
                <Link className="flex items-center md:gap-3">
                    <AiOutlineSetting className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">Settings</span>
                    <ul id="sitting" className="list-unstyled opacity-[0] absolute transition-[0.3s] bg-[#009688af] flex flex-col gap-2 shadow px-[15px] py-[10px] border-b left-[-10px] top-[110%] w-[250px] text-[#E0F2F1]">
                      <li className="flex justify-between align-center">Color
                        <ul className="flex gap-2">
                          <li className="rounded-[50%] w-[15px] h-[15px] bg-[#eee]"></li>
                          <li className="rounded-[50%] w-[15px] h-[15px] bg-[#999]"></li>
                          <li className="rounded-[50%] w-[15px] h-[15px] bg-[#333]"></li>
                          <li className="rounded-[50%] w-[15px] h-[15px] bg-[#f6f6f6]"></li>
                        </ul>
                      </li>
                      <li className="flex justify-between align-center">Font
                        <label htmlFor="txtFont">
                          <input type="text" list="listFonts" name="Font" id="txtFont" placeholder="Font"/>
                        </label>
                        <datalist id="listFonts">
                          <option value={"font1"}/>
                          <option value={"font2"}/>
                          <option value={"font3"}/>
                        </datalist>
                      </li>
                      <li>size</li>
                    </ul> 
                </Link>
            </li>
          </ul>
        </nav>

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