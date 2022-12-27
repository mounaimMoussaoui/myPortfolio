import {AiOutlineDownload, AiFillHtml5} from "react-icons/ai"
import {FaCss3Alt, FaBootstrap, FaReact, FaSass} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"
// import {tp} from "react-icons/si"
import "./style/about.css"

const About = () => {
    return (
        <div className=" text-center w-full">
            <h1 className="text-[35px] font-bold my-[50px] head-section" data-text="About Me">ABOUT<span>ME</span></h1>
            <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col md:flex-row gap-[35px] px-[30px]">
                    <div className="flex flex-col items-center md:items-start gap-[30px] md:w-[50%] ">
                        <h2 className="text-lg font-bold text-[25px]">INFORMATION ABOUT ME</h2>
                        <p className="md:text-start leading-8">I'm a 23-year-old Moroccan youth,  holder of a diploma in development Informatique on 2021 and this year I completed my studies on web development with self-study and at the same time practiced these skills with the creation of Templates that found in multi-platform like FrontEnd Mentor and I works on my logical thinking with problem solving on leetcode and hackerrank.</p>
                        <a href="Moussaoui Abdennaim cv_2.pdf" download className="bg-[#ddd] pl-2 pr-4 py-2 rounded-[30px] flex items-center gap-4 transition-[0.3s] hover:bg-[#eee]"><AiOutlineDownload className="w-[30px] h-[30px] bg-[#eee] rounded-[50%] p-2" /> Download</a>
                    </div>
                    <div className="flex flex-wrap gap-[30px] my-4">
                        <div className="card flex flex-col items-start gap-4 shadow-lg w-[100%] md:w-[45%] rounded-[5px] p-4">
                            <span className="font-bold text-[35px]">10+</span>
                            <span className="pl-4 text-start">PROJECTS<br />COMPLETED</span>
                        </div>
                        <div className="card flex flex-col items-start gap-4 shadow-lg w-[100%] md:w-[45%] rounded-[5px] p-4">
                            <span className="font-bold text-[35px]">0+</span>
                            <span className="pl-[25px] text-start">YEARS OF<br />EXPERIENCE</span>
                        </div>
                        <div className="card flex flex-col items-start gap-4 shadow-lg w-[100%] md:w-[45%] rounded-[5px] p-4">
                            <span className="font-bold text-[35px]">0+</span>
                            <span className="pl-[25px] text-start">HAPPY<br />CLIENTS</span>
                        </div>
                        <div className="card flex flex-col items-start gap-4 shadow-lg w-[100%] md:w-[45%] rounded-[5px] p-4">
                            <span className="font-bold text-[35px]">0+</span>
                            <span className="pl-[25px] text-start">CUSTOMER<br />REVIEWS</span>
                        </div>
                    </div>
                </div>
                <div className="skills flex flex-col px-[35px] py-[35px] gap-4">
                    <span className="title font-bold text-[30px] my-5">MY SKILLS</span>
                    <div className="flex w-full flex-wrap gap-y-[25px] flex-wrap">
                        <div className="skill htl md:w-[50%] flex items-center gap-4 w-full px-[20px]">
                            <AiFillHtml5 className="text-[40px]"/>
                            <div className="flex-grow md:w-[50%] h-[15px] bg-[#eee] relative">
                                <span data-vol="75%" className="w-[75%] bg-[#666] h-[100%] absolute left-0 text-[#fff] text-[12px] flex items-center justify-center">75%</span>
                            </div>
                        </div>
                        <div className="skill css md:w-[50%] flex items-center gap-4 w-full px-[20px]">
                            <FaCss3Alt className="text-[40px]"/>
                            <div className="flex-grow md:w-[50%] h-[15px] bg-[#eee] relative">
                                <span data-vol="75%" className="w-[75%] bg-[#666] h-[100%] absolute left-0 text-[#fff] text-[12px] flex items-center justify-center">75%</span>
                            </div>
                        </div>
                        <div className="skill js md:w-[50%] flex items-center gap-4 w-full px-[20px]">
                            <SiJavascript className="text-[40px]"/>
                            <div className="flex-grow md:w-[50%] h-[15px] bg-[#eee] relative">
                                <span data-vol="75%" className="w-[75%] bg-[#666] h-[100%] absolute left-0 text-[#fff] text-[12px] flex items-center justify-center">75%</span>
                            </div>
                        </div>
                        <div className="skill boot md:w-[50%] flex items-center gap-4 w-full px-[20px]">
                            <FaBootstrap className="text-[40px]"/>
                            <div className="flex-grow md:w-[50%] h-[15px] bg-[#eee] relative">
                                <span data-vol="60%" className="w-[60%] bg-[#666] h-[100%] absolute left-0 text-[#fff] text-[12px] flex items-center justify-center">60%</span>
                            </div>
                        </div>
                        <div className="skill react md:w-[50%] flex items-center gap-4 w-full px-[20px]">
                            <FaReact className="text-[40px]"/>
                            <div className="flex-grow md:w-[50%] h-[15px] bg-[#eee] relative">
                                <span data-vol="55%" className="w-[55%] bg-[#666] h-[100%] absolute left-0 text-[#fff] text-[12px] flex items-center justify-center">55%</span>
                            </div>
                        </div>
                        <div className="skill sas md:w-[50%] flex items-center gap-4 w-full px-[20px]">
                            <FaSass className="text-[40px]"/>
                            <div className="flex-grow md:w-[50%] h-[15px] bg-[#eee] relative">
                                <span data-vol="60%" className="w-[60%] bg-[#666] h-[100%] absolute left-0 text-[#fff] text-[12px] flex items-center justify-center">60%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    };
    
    export default About;