import { Hero } from './components/section-home/hero';
import Cards from './components/section-content/cards'
import Content from './components/section-content/content';
import Porfolio from './components/porfolio';
import PorfolioSec2 from './components/porfoliosec2';
import FooterSec from './components/footer';
import SectionHome from './components/section-home/section-home';
import SectionContent from './components/section-content/section-content';
/* eslint-disable no-undef */
export default function Home() {
  return (
      <div className='overflow-hidden'>
    
        <SectionHome/>

        <SectionContent/>

       <section id='proyectos' className="relative sm:static h-auto px-3 lg:px-24 laptop:px-36 fullhd:px-80 flex-col ">
          <Porfolio></Porfolio> 
          <PorfolioSec2></PorfolioSec2>
        </section>
        
        <section id='contactame' className="h-screen px-3 sm:px-36 flex justify-center items-center mt-[500px] sm:mt-0">
          <FooterSec></FooterSec>
        </section> 
 
      
      </div>
  );
}
