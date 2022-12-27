import {ImLocation} from "react-icons/im";
import {AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineDownload} from "react-icons/ai";
import {BsPhone} from "react-icons/bs";
import {FaLanguage, FaFacebookF} from "react-icons/fa";

const Contact = () => {
    return (
      <div className="flex flex-col p-[30px]">
        <h1 className="text-[35px] font-bold text-center my-[50px] head-section" data-text="CONTACT">CONTACT</h1>
        <div className="flex justify-between items-center flex-wrap gap-y-[40px]">
          <div className="info-contact md:w-[48%]">
            <h2 className="text-[20px] font-bold my-4">CONTACT ME HERE</h2>
            <p className="leading-8 text-[#888] my-4">I am very happy for your contacts with me with one of these tools And I am available to start as an internship with your to judge my skills </p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-2 items-center">
                <ImLocation />
                <span>Location :</span><a href="https://www.google.com/maps/dir/33.5599242,-7.4705944/33.5599664,-7.4700236/@33.5595813,-7.4726898,16.27z/data=!4m4!4m3!1m1!4e1!1m0">Maroc, Casablanca</a>
              </li>
              <li className="flex gap-2 items-center">
                <AiOutlineMail />
                <span>Email :</span><a href="mailto:moussaouiabdennaim@gmail.com">moussaouiabdennaim@gmail.com</a>
              </li>
              <li className="flex gap-2 items-center">
                <BsPhone />
                <span>Mobile Number :</span>07-70-81-21-61
              </li>
              <li className="flex gap-2 items-center">
                <FaLanguage />
                <span>Languages :</span>Arab, French, English
              </li>
              <li>
                <ul className="social-media flex gap-4 mt-4">
                  <li className="w-[40px] h-[40px] bg-[#eee] rounded-[50%] flex items-center justify-center">
                    <a href="https://www.facebook.com/mounaim.skwadra.5">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="w-[40px] h-[40px] bg-[#eee] rounded-[50%] flex items-center justify-center">
                    <a href="https://github.com/mounaimMoussaoui">
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="w-[40px] h-[40px] bg-[#eee] rounded-[50%] flex items-center justify-center">
                    <a href="https://www.linkedin.com/in/moussaoui-abdennaim-9078ab196">
                      <AiFillLinkedin />
                    </a>
                  </li>
                  <li className="w-[40px] h-[40px] bg-[#eee] rounded-[50%] flex items-center justify-center">
                    <a href="https://twitter.com/AbdennaimM">
                      <AiOutlineTwitter />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="flex flex-col md:w-[48%] gap-y-[30px]">
            <div className="flex gap-x-[30px]">
              <label htmlFor="txtName" className="w-[50%]">
                <input type={"text"} required placeholder="YOUR NAME" id="txtName" className="border py-2 px-3 rounded-[5px] w-full" />
              </label>
              <label htmlFor="txtEmail" className="w-[50%]">
                <input type={"email"} required placeholder="YOUR Email" id="txtEmail" className="border py-2 px-3 rounded-[5px] w-full"  />
              </label>
            </div>
            <label htmlFor="txtSubject">
                <input type={"text"} required placeholder="YOUR SUBJECT" id="txtSubject" className="border py-2 px-3 rounded-[5px] w-full"  />
            </label>
            <textarea placeholder="Message Here" name="txtMsg" cols={"5"} rows={"5"} className="border py-2 px-3 rounded-[5px] resize-none" ></textarea>
            <div className="flex gap-x-4">
                <a href="#hh" download className="bg-[#ddd] pl-2 pr-4 py-2 rounded-[30px] flex items-center gap-4 transition-[0.3s] hover:bg-[#eee]"><AiOutlineDownload className="w-[30px] h-[30px] bg-[#eee] rounded-[50%] p-2" /> Download</a>
                <input type={"submit"} value="submit"  name="submit" className="rounded-[30px] transition-[0.3s] px-[25px] py-2 hover:bg-[#ddd]"/>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;