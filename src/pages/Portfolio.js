import { useEffect } from "react";
import "./style/portfolio.css";
import {AiFillGithub} from "react-icons/ai"
import { useState } from "react";

const Portfolio = () => {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
      fetch("https://api.github.com/users/mounaimMoussaoui/repos")
      .then((res) => {
          return res.json();
      })
      .then(data => setRepos(data));
    }, [])

    return (
      <div className="flex flex-col gap-[30px] p-4 w-full text-center overflow-hidden">
        <h1 className="text-[40px] font-bold my-[30px] head-section" data-text="Portfolio">Portfolio</h1>
        <iframe name="iframe" src="https://mounaimmoussaoui.github.io/RockPaperScissorsGame/" className="w-full min-h-[80vh] shadow-lg rounded-lg frame" title="This frame come a small tab to show all works"></iframe>
          <h1 className="my-4 text-[40px] font-[700] text-head mx-auto">All Works</h1>
        <div className="container w-full">
          {
            repos.filter(repo => !repo.fork).map((repo) => {
              // console.log(repo);
              return (
                <div key={repo.id} className="proj shadow h-[200px] rounded-lg relative flex items-center overflow-hidden justify-center">
                <a href={`https://mounaimmoussaoui.github.io/${repo.name}/index.html`} title="Path the Live Demo" target={"iframe"}>
                    <img src={`/images/project${Math.ceil(Math.random() * 12)}.png`} alt="prj-img" className="w-full h-full bg-[#ccc]" onClick={() => window.scroll({top: 0, behavior: "smooth"})}/>
                  </a>
                  <a href={repo.html_url} title="Path The Repository" className="btn-git absolute w-[40px] h-[40px] flex items-center justify-center bg-[#fff] hover:bg-[#ffffff99] right-2 top-2 rounded-[50%] transition-[0.3s]">
                      <AiFillGithub className="w-[25px] h-[25px]"/>
                      <span className="txtTol absolute right-[110%] w-[max-content] px-2 text-sm text-[#555] rounded-sm bg-[#ffffff99]">see the code in the github</span>
                  </a>
                  <div className="content-proj transition-[0.5s] absolute bottom-[-20%] opacity-0 bg-[#4c6c89] w-full p-4 text-start text-black-50">
                    <span className="text-[20px] font-bold text-white">{repo.name}</span>
                    <p className="text-sm text-[#B2DFDB] font-[600]">{repo.description}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  };
  
  export default Portfolio;
