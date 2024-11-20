"use client";
import {useTheme} from "next-themes";
import Header from "./header";
import { Hero } from "./hero";
import { useEffect } from "react";

export default function SectionHome(){

  const { theme, setTheme } = useTheme()
  
  useEffect(()=>{

    setTheme('dark')

  },[])
 
  return(

    <section className={`sm:h-screen ${theme != 'light' ? "mi_section_dark" : "mi_section_ligth"}`}>
          <Header></Header>
          <Hero></Hero>
    </section>
    
  )
}