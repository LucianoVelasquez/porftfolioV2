import Header from './components/header';
import { Hero } from './components/hero';
import Cards from './components/cards'
import Content from './components/content';
import Porfolio from './components/porfolio';
import PorfolioSec2 from './components/porfoliosec2';
import FooterSec from './components/footer';
/* eslint-disable no-undef */
export default function Home() {
  return (
      <div className='overflow-hidden'>
    
        <section className="sm:h-screen mi_section">
          <Header></Header>
          <Hero></Hero>
        </section>
        
        <section className="h-auto relative px-3 lg:px-12 mi_section2">
          <div className='absolute -top-7 w-10/12 h-10 bg-background blur hidden sm:flex'></div>
          <Cards></Cards>
          <Content></Content>
          <div className='absolute -bottom-9 w-10/12 h-10 bg-background blur hidden sm:flex'></div>
        </section>
 
      
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
