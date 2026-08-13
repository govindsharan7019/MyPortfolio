import React from 'react'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Link, Route, Routes } from 'react-router-dom';
import Skills from './Pages/Skills';
import Navbar from './components/Home/Navbar';
import Footer from './components/Common/Footer';
import Animation from './components/Common/Animation';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Projects' element={ <Projects/>}/>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Contact' element={ <Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
