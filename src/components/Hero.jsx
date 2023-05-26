import {React, useEffect} from "react";
import card from "./card1.jpg";
import tailwindcssBgPatterns from 'tailwindcss-bg-patterns';
import AOS from "aos"
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(()=>{
        AOS.init({duration:1300});
       }, []);
      
    
    return(
        <div>
        <div className=" bg-[#fffee8] W-[100%] m-0 p-24 h-[100vh] ">
    <div className="md:flex grid border-solid rounded-3xl w-[300px] md:w-[1205px] md:right-[22px] relative right-[73px] h-[540px] bg-white shadow-xl shadow-gray-400 md:h-[400px] md:justify-center " data-aos="fade-right">
        <div className="md:grid md:text-left relative p-4  md:top-0 top-[260px] font-bold font-Inconsolata ">
    <p className="text-black text-center font-Kalam font-bold md:text-4xl text-2xl md:relative md:top-[25px]">I'm Hamed Irvani</p>
    <p>I've been interested in programming and IT since I was a kid.</p>
    <p> It's always have been fun for me to learn new things.</p>
    <p>I'm studying computer engineering at the moment.</p>
    <p>Trying to learn more and grow everyday.</p>


    </div>
    <img src={card} alt="" className=" md:w-74 md:h-72 h-[220px]  rounded-full md:relative md:left-[100px] md:top-[45px] absolute bottom-[300px] left-[30px] " />
    </div>  
    </div>
    </div>
    )
}









export default Hero;