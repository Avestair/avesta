import {React, useEffect} from "react";
import weatherapp from "./weatherapp.png"
import plus from "./plus.png"
import AOS from "aos";
import 'aos/dist/aos.css'
const Projects = () => {
    useEffect(()=>{
        AOS.init({duration:1300});
       }, []);

    return (
        <div className="bg-[#fffee8] p-8 relative md:top-[150px]" data-aos="zoom-in-down">
            <h1 className="font-bold font-Kalam md:text-2xl text-black relative md:bottom-[60px] md:left-[86px]">My Projects</h1>
        <div className=" grid justify-center border-solid rounded-3xl font-Inconsolata bg-white md:w-[500px] md:h-[320px] w-[280] relative top-[15px] md:left-[80px] shadow-xl shadow-gray-400 hover:scale-105">
            <a href="https://645bc1443357cb177a9c220a--splendid-gumption-b3ab13.netlify.app/"><img src={weatherapp} alt=""  className="md:w-[500px]  md:h-60 rounded-3xl "/></a>
            <p className="text-black text-xl p-2">a current weather app</p>
            <p className="text-black text-sm p-2">a simple weather app made with react and openweathermap api</p>
        </div>
        <div className="grid justify-center border-solid rounded-3xl mb-8 bg-white md:w-[500px] md:h-[320px] w-[300px] relative right-[2px] top-[50px] md:left-[750px]  md:top-[-305px] shadow-xl shadow-gray-400 hover:scale-105">

        <img src={plus} alt="" className="md:w-[200px] md:h-40 w-[140px] h-[140px] left-[70px] relative md:top-[10px] md:left-[80px]" />
        <p className="p-2 font-Inconsolata text-black text-xl ">more projects will be added soon...</p>
        </div>
        </div>
    )
}









export default Projects;