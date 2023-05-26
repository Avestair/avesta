import { useEffect , React } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import AOS from "aos"
import 'aos/dist/aos.css'

const Sidebar = () => {
  const headerEL = document.querySelector('.header1');

  window.addEventListener('scroll' , () => {
    if (window.scrollY > 50) {
      headerEL.classList.add('header1-scrolled');
    } else if (window.scrollY <= 50) {
      headerEL.classList.remove('header1-scrolled');
    }
  });

 useEffect(()=>{
  AOS.init({duration:1300});
 }, []);

  return(
    <div className="fixed left-[80px] top-0 md:left-[1170px] md:top-[200px] z-[200]" data-aos="fade-left">
    <div className="flex header1 text-black w-[200px] h-[40px] md:w-[300px] md:h-[60px]  font-Kalam font-bold md:text-xl justify-center md:gap-9 z-[100] md:rotate-[-269deg] border-solid rounded-md shadow-md shadow-gray-400">
     <div className=" flex md:gap-10 relative md:top-4">
     <a href="https://github.com/Avestair" target="_blank" className="hover:animate-bounce"><FontAwesomeIcon icon={faGithub} className="relative right-[38px] top-[8px] md:left-9" />
     <p className="relative right-[18px] bottom-[15px] md:right-8 md:bottom-[29px]">GitHub</p></a>
     <a href="https://t.me/Aavesta" target="_blank" className="hover:animate-bounce"><p className="relative left-[19px] top-[8px] md:left-8">Telegram</p>
     <FontAwesomeIcon icon={faTelegram} className="relative left-[84px] bottom-[15px] md:left-[5px] md:bottom-[27px]" /></a>
    </div>
    </div>
    </div>
  )

}






export default Sidebar;