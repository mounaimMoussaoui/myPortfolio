import React, { useCallback } from "react";
import { motion } from "motion/react";
import {AiOutlineHome, AiOutlineSetting, AiOutlineContacts, AiOutlineFundProjectionScreen, AiOutlineUser} from "react-icons/ai";
import { Link } from "react-router-dom";

export const LeftNavbar = React.memo(() => {

     const showSetting = useCallback((e) => {
        if(e.currentTarget.getAttribute("id")=== "btnStyle") {
          e.currentTarget.classList.toggle("clicked");
          let list = document.getElementById("sitting");
            ["opacity-[0]", "-left-[10px]"].forEach(cls => list.classList.toggle(cls));
            ["opacity-[1]", "left-[10px]"].forEach(cls => list.classList.toggle(cls));
          }
        }, []);
    
      const handleActive = useCallback((e) => {
        const listLi = e.currentTarget.parentElement.children;
        [...listLi].forEach((li) => {
          li.classList.remove("active");
        });
        e.currentTarget.classList.toggle("active");
      }, []);

    return (
       <motion.nav initial={{ left: '-100%', opacity: 0 }} animate={{ left: '0px', opacity: 1, transition: {type: 'spring', duration: 1, delay: 0.5} }} exit={{ left: '-100%' }} className="shadow min-h-[100vh] p-2 bg-[#253f56] w-[60px] md:w-[170px] relative navBar">
          <ul className="nav-bar flex flex-col gap-4 relative text-[#fff]">
            <motion.li  whileHover={{ scale: 1.1}}
                        animate={{scale: 1, transition: {type: 'spring'}}}
                        whileTap={{scale: 0.9}}
                        className="md:px-4 active" onClick={handleActive}>

                    <Link to="/" className="flex items-center md:gap-3 hover:before:left-[-10px]">
                      <AiOutlineHome className="w-[25px] h-[25px]" />
                      <span className="hidden md:block">Home</span>
                    </Link>
            </motion.li>
            <motion.li  whileHover={{ scale: 1.1}}
                        animate={{scale: 1, transition: {type: 'spring'}}}
                        whileTap={{scale: 0.9}}
                        className="md:px-4" onClick={handleActive}>
                <Link to={"/about"} className="flex items-center md:gap-3 whitespace-nowrap hover:before:left-[-10px]">
                    <AiOutlineUser className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">About Me</span>
                </Link>
            </motion.li>
            <motion.li  whileHover={{ scale: 1.1}}
                        animate={{scale: 1, transition: {type: 'spring'}}}
                        whileTap={{scale: 0.9}}
                        className="md:px-4" onClick={handleActive}>
                <Link to="/contact" className="flex items-center md:gap-3 hover:before:left-[-10px]">
                    <AiOutlineContacts className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">Contact</span>
                </Link>
            </motion.li>
            <motion.li  whileHover={{ scale: 1.1}}
                        animate={{scale: 1, transition: {type: 'spring'}}}
                        whileTap={{scale: 0.9}}
                        className="md:px-4" onClick={handleActive}>
                <Link to="/portfolio" className="flex items-center md:gap-3 hover:before:left-[-10px]">
                    <AiOutlineFundProjectionScreen className="w-[25px] h-[25px]" />
                    <span className="hidden md:block">portfolio</span>
                </Link>
            </motion.li>
            <motion.li  whileHover={{ scale: 1.1}}
                        animate={{scale: 1, transition: {type: 'spring'}}}
                        whileTap={{scale: 0.9}}
                        className="md:px-4 relative" id="btnStyle" onClick={(e) => showSetting(e)}>

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
            </motion.li>
          </ul>
      </motion.nav>
    )
})