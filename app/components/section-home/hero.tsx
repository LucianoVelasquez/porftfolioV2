'use client'

import { Button } from "@nextui-org/react"
import img from "@/public/Logo-Azul-Cobalto.png"
import Image from "next/image"
import { URL_CV_DRIVE } from "@/app/consUtils"

export function Hero() {
  return (
    <div className="flex sm:flex-row flex-col-reverse h-full lg:px-24 laptop:px-36 fullhd:px-80 px-3 z-0 justify-center w-full items-center mt-10 sm:mt-0">

        <div className="h-5/6 mt-10 sm:mt-8 w-full flex flex-col justify-center items-center sm:items-start text-4xl sm:text-6xl">
            <h1 className="font-semibold text-nowrap xl:text-6xl">Luciano Velasquez</h1>
            <h1 className="font-semibold mt-2 text-nowrap sm:text-5xl xl:text-6xl">Full Stack Developer</h1>
            <h1 className="font-light text-lg sm:text-xl mt-6 text-center sm:text-start">Soy un Dev web con formación en analista de sistemas y experiencia en proyectos full stack, me especializo en el desarrollo <strong>front end</strong> utilizando <strong>React</strong>.</h1>
            <div className="flex gap-x-5 mt-7">
                <a href="#proyectos"><Button color="primary" variant="solid" className="h-[44px] w-40 ">Proyectos</Button></a>
                <a href={URL_CV_DRIVE} target="_blank"><Button color="primary" variant="faded" className="h-[44px] w-40 bg-opacity-80">Descargar CV</Button></a>
            </div>
        </div>

        <div className="sm:h-5/6 h-64 mt-11 sm:mt-20 sm:w-full flex justify-center">
            <Image src={img} alt="" className="object-cover w-96 sm:w-full"></Image>
        </div>

    </div>
  )
}
