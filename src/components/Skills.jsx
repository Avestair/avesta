import {React, useEffect} from "react";
import tailwindcssBgPatterns from 'tailwindcss-bg-patterns';
import AOS from "aos";
import 'aos/dist/aos.css'
const Skills = () =>{
    useEffect(()=>{
        AOS.init({duration:1300});
       }, []);
      
    return(
   <div className="p-8 grid w-[300px] h-[280px] md:h-[450px] z-[100]  bg-white md:w-[1200px] border-solid rounded-3xl shadow-xl shadow-gray-400 text-black md:text-xl font-Inconsolata relative left-[26px] md:left-[80px]" data-aos="zoom-in-down">
    <h1 className="font-bold font-Kalam md:text-2xl relative text-xl md:left-[95px]">My Skills</h1>
  <p className="text-black relative md:left-24 md:top-[35px] md:text-xl text-left md:p-2">HTML</p> <p className="text-black md:text-xl  relative md:left-[1000px] md:bottom-2">100%</p>
  <div class=" relative w-[240px] h-3 md:left-24 md:h-5 md:w-[900px] bg-[#fffee8] rounded-3xl border-solid shadow-4xl shadow-gray-500 pattern-diagonal-lines pattern-black pattern-bg-transparent pattern-opacity-80 pattern-size-2"></div>


  <p className="text-black relative md:left-24 md:top-[28px] md:text-xl text-left md:pt-8">JAVA SCRIPT</p> <p className="relative md:left-[1000px] bottom-2">45%</p>
  <div class=" relative w-[108px] h-3 md:left-24 md:h-5 md:w-[405px] bg-[#fffee8] rounded-3xl border-solid shadow-4xl shadow-gray-500 pattern-diagonal-lines pattern-black pattern-bg-transparent pattern-opacity-80 pattern-size-2"></div>

  <p className="text-black relative md:left-24 md:top-[28px] md:text-xl text-left md:pt-8">CSS</p> <p className="relative md:bottom-2 md:left-[1000px]">60%</p>
  <div class=" relative w-[160px] h-3 md:left-24 md:h-5 md:w-[540px] bg-[#fffee8] rounded-3xl border-solid shadow-4xl shadow-gray-500 pattern-diagonal-lines pattern-black pattern-bg-transparent pattern-opacity-80 pattern-size-2"></div>

</div>
    )
}









export default Skills;