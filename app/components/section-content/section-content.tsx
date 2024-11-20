"use client";
import { useEffect } from "react";
import Cards from "./cards";
import Content from "./content";
import {useTheme} from "next-themes";

export default function SectionContent(){

  const { theme, setTheme } = useTheme()
  
  useEffect(()=>{
    console.log(theme)
  },[theme])

  return(

    <section className={`h-auto relative px-3 lg:px-12 ${theme != 'light' ? "mi_section2_dark" : "mi_section2_light"}`}>
        <div className='absolute -top-7 w-10/12 h-10 bg-background blur hidden sm:flex'></div>
          <Cards></Cards>
          <Content></Content>
        <div className='absolute -bottom-9 w-10/12 h-10 bg-background blur hidden sm:flex'></div>
    </section>

  )
}