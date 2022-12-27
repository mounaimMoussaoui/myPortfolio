import "./style/portfolio.css"

import {AiFillGithub} from "react-icons/ai"

const Portfolio = () => {
    return (
      <div className="flex flex-col gap-[30px] p-4 w-full text-center">
        <h1 className="text-[40px] font-bold my-[30px] head-section" data-text="Portfolio">Portfolio</h1>
        <iframe name="iframe" src="https://mounaimmoussaoui.github.io/RockPaperScissorsGame/" className="w-full min-h-[80vh] shadow-lg frame" title="This frame come a small tab to show all works"></iframe>
          <h1 className="my-4 text-[40px] font-[700] text-head mx-auto">All Works</h1>
        <div className="container w-full">
        <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/templateDashboard/index.html" target={"iframe"}>
              <img src="project8.png" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/templateDashboard" target={"iframe"} className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">Dashboard</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css, js</p>
            </div>
          </div>
        <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/RockPaperScissorsGame/" target={"iframe"}>
              <img src="desktop-preview.jpg" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/RockPaperScissorsGame" target={"iframe"} className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">Rock Paper Scissors Game</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css, js</p>
            </div>
          </div>
          <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/job-listings-with-filtering/" target={"iframe"}>
              <img src="project2.jpg" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/job-listings-with-filtering" className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">Job listings with filtering</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css, js</p>
            </div>
          </div>
          <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/HtmlCssTemplate/" target={"iframe"}>
              <img src="project4.png" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/HtmlCssTemplate" className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">Elzero Template</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css, js</p>
            </div>
          </div>
          <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/kaseprTemplate/" target={"iframe"}>
              <img src="project3.png" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/kaseprTemplate" className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">kasepr Template</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css, js</p>
            </div>
          </div>
          <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/bondiRepo/" target={"iframe"}>
              <img src="project6.png" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/bondiRepo" className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">Bondi Template</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css, js, Bootstrap</p>
            </div>
          </div>
          <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/challengeEcommerce/" target={"iframe"}>
              <img src="eCommerce.jpg" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/challengeEcommerce" className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">Card E-Commerce Template</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css, js, Sass</p>
            </div>
          </div>
          <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/frontEndMentor/" target={"iframe"}>
              <img src="landingPrj.jpg" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/frontEndMentor" className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">Landing Page Template</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css</p>
            </div>
          </div>
          <div className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
            <a href="https://mounaimmoussaoui.github.io/TodoChallengesFrontendMentor/" target={"iframe"}>
              <img src="todoPrj.jpg" alt="prj-img" className="w-full h-full bg-[#ccc]" />
            </a>
            <a href="https://github.com/mounaimMoussaoui/TodoChallengesFrontendMentor" className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                <AiFillGithub className="w-[25px] h-[25px]"/>
                <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
            </a>
            <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#11111199] w-full p-4 text-start text-black-50">
              <span className="text-[20px] font-bold text-white">Todo challenge</span>
              <p className="text-sm text-[#ccc] font-[600]">Used Languages html, css, js</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;