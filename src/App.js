import { useEffect, useState } from 'react';
import Navbar from './scence/Navbar';
import useMediaQuery from "./hooks/useMediaQuery"
import DotGroup from './scence/DotGroup';
import Landing from './scence/Landing';
import LineGradient from './components/LineGradient';
import MySkill from './scence/MySkill';
import Project from './scence/Project';
import Contact from './scence/Contact';
import Footer from './scence/Footer';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app ">
      <Navbar 
        isTopOfPage={isTopOfPage} 
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage}
      />

      <div className='w-5/6 mx-auto md:h-full'>
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage}/>
      </div>

      <LineGradient />
      <div className='w-5/6 mx-auto '>
          <MySkill setSelectedPage={setSelectedPage} />
      </div>

      <div className='w-5/6 mx-auto md:mt-32'>
        <Project setSelectedPage={setSelectedPage}></Project>
      </div>

      <LineGradient />
      <div className='w-5/6 mx-auto sm:h-full'>
          <Contact setSelectedPage={setSelectedPage} />
      </div>

      <LineGradient/>
      <div className=' mx-auto'>
          <Footer setSelectedPage={setSelectedPage} />
      </div>
    </div>
  );
}

export default App;
