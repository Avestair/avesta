import React ,{ useState } from 'react'
import './index.css'
import tailwindcssBgPatterns from 'tailwindcss-bg-patterns'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'


function App() {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entries) => {
      console.log(entry)
      if (entry.Intersecting) {
        entry.target.classList.add('show1');
      } else {
        entry.target.classList.remove('show1');
      }
    });
  });

  const hiddenelements = document.querySelectorAll('.hidden1');
  hiddenelements.forEach((el) => observer.observe(el));

  return (
    <>
  <div className='overflow-x-hidden overflow-y-hidden bg-[#fffee0]'>
    <Header />
    <Hero  class="hidden1"/>
    <Sidebar/>
    <Skills />
    <Projects />
    <Footer />
  </div>
    </>
  )
}

export default App
