import {ImLocation} from "react-icons/im";
import {AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineTwitter, AiOutlineDownload} from "react-icons/ai";
import {BsPhone} from "react-icons/bs";
import {FaLanguage, FaFacebookF} from "react-icons/fa";
import {motion} from "framer-motion";

const containerVariantsSocialMedia = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delayChildren: 0.5,
      staggerChildren: 0.3
    }
  }
}

const itemVariantsSocialMedia = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
}

const Contact = () => {
    return (
      <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0, transition: {type: 'spring', delay: 0.5}}} className="flex flex-col p-[30px] overflow-hidden">
        <h1 className="text-[35px] font-bold text-center my-[50px] head-section" data-text="CONTACT">CONTACT</h1>
        <div className="flex justify-between items-center flex-wrap gap-y-[40px]">
          <div className="info-contact md:w-[48%]">
            <h2 className="text-[20px] text-[#213b53] font-bold my-4">CONTACT ME HERE</h2>
            <p className="leading-8 text-[#888] my-4">I am very happy for your contacts with me with one of these tools And I am available to start as an internship with your to judge my skills </p>
            <motion.ul  initial={{opacity: 0}} animate={{opacity: 1, transition: {type: 'spring', duration: 1, delay: 0.5}}}
                        className="flex flex-col gap-4 text-[#213b53]">
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
                <motion.ul  variants={containerVariantsSocialMedia} 
                            initial="hidden" animate="visible"
                            className="social-media flex gap-4 mt-4">
                  <motion.li variants={itemVariantsSocialMedia} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className="w-[40px] h-[40px] text-[#1877f2] bg-[#eceff16b] rounded-[50%] facebook flex items-center justify-center">
                    <a href="https://www.facebook.com/mounaim.skwadra.5" title="My profile Facebook" target="_blank" rel="noopener noreferrer">
                      <FaFacebookF />
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariantsSocialMedia} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className="w-[40px] h-[40px] text-[#333] bg-[#eceff16b] github rounded-[50%] flex items-center justify-center">
                    <a href="https://github.com/mounaimMoussaoui" title="My profile Github" target="_blank" rel="noopener noreferrer">
                      <AiFillGithub />
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariantsSocialMedia} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className="w-[40px] h-[40px] text-[#0a66c2] bg-[#eceff16b] linkedin rounded-[50%] flex items-center justify-center">
                    <a href="https://www.linkedin.com/in/moussaoui-abdennaim-9078ab196" title="My profile Linkedin" target="_blank" rel="noopener noreferrer">
                      <AiFillLinkedin />
                    </a>
                  </motion.li>
                  <motion.li variants={itemVariantsSocialMedia} whileHover={{scale: 1.2}} whileTap={{scale: 0.9}} className="w-[40px] h-[40px] text-[#1da1f2] bg-[#eceff16b] rounded-[50%] twitter flex items-center justify-center">
                    <a href="https://twitter.com/AbdennaimM" title="My profile twitter" target="_blank" rel="noopener noreferrer">
                      <AiOutlineTwitter />
                    </a>
                  </motion.li>
                </motion.ul>
              </li>
            </motion.ul>
          </div>
          <motion.form variants={containerVariantsSocialMedia} initial="hidden" animate="visible" className="flex flex-col w-[100%] md:w-[48%] gap-y-[20px] relative md:px-[1.875rem] contact-form">
            <motion.div variants={itemVariantsSocialMedia} className="flex gap-x-[30px] flex-col md:flex-row">
              <label htmlFor="txtName" className="md:w-[50%] text-[#213b53]">
                Name 
                <input type={"text"} required placeholder="YOUR NAME" id="txtName" className="border py-2 mt-1 px-3 rounded-[5px] w-full focus:outline-none focus:border-[#213b53]" />
              </label>
              <label htmlFor="txtEmail" className="md:w-[50%] text-[#213b53]">
                Email
                <input type={"email"} required placeholder="YOUR Email" id="txtEmail" className="border py-2 mt-1 px-3 rounded-[5px] w-full focus:outline-none focus:border-[#213b53]"  />
              </label>
            </motion.div>
            <motion.label variants={itemVariantsSocialMedia} htmlFor="txtSubject" className="text-[#213b53]">
                Subject
                <input type={"text"} required placeholder="YOUR SUBJECT" id="txtSubject" className="border py-2 mt-1 px-3 rounded-[5px] w-full focus:outline-none focus:border-[#213b53]"  />
            </motion.label>
            <motion.label variants={itemVariantsSocialMedia} htmlFor="txtMsg" className="text-[#213b53] flex flex-col" >
              Message
              <textarea placeholder="Message Here" name="txtMsg" id="txtMsg" cols={"5"} rows={"5"} className="border py-2 mt-1 px-3 rounded-[5px] resize-none focus:outline-none focus:border-[#213b53]" ></textarea>
            </motion.label>
            <motion.div variants={itemVariantsSocialMedia} className="flex gap-x-4 flex-col gap-2 sm:flex-row ">
                <motion.a href="Moussaoui Abdennaim cv_2.pdf" download whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="pl-2 pr-4 py-2 rounded-[30px] flex items-center gap-4 transition-[0.3s]"><AiOutlineDownload className="w-[30px] h-[30px] bg-[#eee] rounded-[50%] p-2"/> Download</motion.a>
                <motion.span  whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="rounded-[30px] flex transition-[0.3s] px-[25px] py-2 btn-submit">Submit</motion.span>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    );
  };
  
  export default Contact;