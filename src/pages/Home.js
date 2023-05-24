import {AiOutlineDownload} from "react-icons/ai";
import "./style/home.css";

const Home = () => {
    return (
      <div className="w-full min-h-[100vh]">
        <div className=" w-full h-full p-[25px] flex items-center">
          <div className="flex items-center md:items-stretch justify-center flex-col md:flex-row gap-4 p-4">
            <div className="glass-effect w-[60%] md:w-[30%] border-2 rounded-[50%] md:rounded-[10px] overflow-hidden">
              <img src="mounaim.jpg" alt="img-user" className="grayscale transition-[0.3s] hover:grayscale-0"/>
            </div>
            <div className="glass-effect content flex gap-4 flex-col items-center md:items-start text-center p-4">
              <h1 className="text-[35px] font-bold text-[#253e55] text-start leading-[1.2]">Hi, I'm <span className="text-[#009688]">AbdEnnaim Moussaoui</span>. A Web Developer.</h1>
              <p className="text-[#777] leading-8">I'm a Web Developer, I love to create beautiful and functional websites you find examples in my protfolio, I have a diploma in development Informatique on 2021, to look at my skills, start downloading my resume a click on button Download</p>
              <a href="Moussaoui Abdennaim cv_2.pdf" download className="pl-2 pr-4 py-2 rounded-[30px] flex items-center gap-4 transition-[0.3s] hover:bg-[#eee]"><AiOutlineDownload className="w-[30px] h-[30px] bg-[#eee] rounded-[50%] p-2" /> Download</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;


  // color: ;
  //   font-size: 35px;
  //   text-align: start;
  //   line-height: 1.2;