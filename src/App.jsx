import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { MobileMenu } from './components/MobileMenu';
import { Navbar } from './components/Navbar';
import { About } from './components/section/About';
import { Contact } from './components/section/Contact';
import { Home } from './components/section/Home';
import { Projects } from './components/section/Projects';

function App() {
  const[isLoaded,setIsLoaded]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false)
  return (
      <>
      {!isLoaded && <LoadingScreen onComplete={()=>setIsLoaded(true)} />}
      <div className={`min-h-screen transititon-opacity duration-700 ${ 
        isLoaded ? "opacity-100":"opacity:0"} bg-black text-gray-100`} >
          <Navbar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </>
  );
}

export default App;
