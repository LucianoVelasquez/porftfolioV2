'use client'
import { Button, Card, CardBody } from "@nextui-org/react";
import { Download, MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { URL_CV_DRIVE } from "@/app/consUtils"
import { useTheme } from "next-themes";

export default function PorfolioSec2(){

  const { theme, setTheme } = useTheme()
  const [isMovil,setIsmovil] = useState<any>(0);

    useEffect(()=>{

        if (typeof window !== 'undefined') {
            
            setIsmovil(window.innerWidth);
          }

    },[])

    return(
        <div className={`${theme != 'light' ? "mi_section3_dark" : "mi_section3_ligth"} rounded-none absolute right-0 w-screen overflow-clip h-60 `}>
            <Card isBlurred  className='px-3 sm:px-36 h-60 border-t border-b rounded-none dark:border-zinc-900 '>
              <CardBody className=' flex justify-center items-start'>
                <h1 className='text-4xl sm:text-6xl '>Para ver mas</h1>
                <h1 className='text-2xl sm:text-5xl mt-1'>Aplicaciones y proyectos</h1>
                <div className="flex gap-x-3 sm:gap-x-5">
                <Link href="/allproyects" ><Button variant='ghost' size={isMovil < 425? "md" : "lg"} color='primary' className='rounded-full  mt-8' >Ver todos
                  <MoveRight size={20}/></Button></Link>
                  <a href={URL_CV_DRIVE} target="_blank"><Button variant='faded'  className='rounded-full  mt-8' size={isMovil < 425? "md" : "lg"}>Descargar CV
                  <Download size={20} /></Button></a>
                </div>
              </CardBody>
            </Card>
          </div>
    )
}
