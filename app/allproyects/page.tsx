'use client'

import { useEffect, useState } from "react";
import {Input} from "@nextui-org/input";
import {Select, SelectItem} from "@nextui-org/select";
import { Button, Pagination } from "@nextui-org/react";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import { MoveLeft } from "lucide-react";
import CardFolio from "./components/card";
import Link from "next/link";

const cards3 =  [
        {
            id: 0,
            title: "Proyecto en Grupo - Full Stack ",
            typo:"Sportiverse",
            img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/1692279677725.jpg"],
            desc: `Sportiverse era una aplicación web destinada a complejos que ofrecen el alquiler de espacios para realizar actividades deportivas.`,
            desc2: `El objetivo era facilitar la reserva y el pago de los servicios, así como crear una
              comunidad de usuarios que pudieran compartir sus experiencias y opiniones.`,
            tec: [
              ["JavaScript","https://www.svgrepo.com/show/349419/javascript.svg"],
              ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
              ["NodeJs","https://www.svgrepo.com/show/452075/node-js.svg"],
              ["PostgreSQL","https://www.svgrepo.com/show/354200/postgresql.svg"],
              ["Redux","https://www.svgrepo.com/show/452093/redux.svg"],
              ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
            ],
            url: "https://sportiverse-client.onrender.com/",
            repo: "",
            viewTec: ["JavaScript","Vite","NodeJs","PostgreSQL","Tailwind","Redux"]
          }, 
        {
          id: 1,
          title: "Proyecto Individual - Full Stack",
          typo:"A&G Ventas",
          img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/692shots_so.jpg","https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/41shots_so.jpg","https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/361shots_so.jpg"],
          desc: `Aplicacion web que tiene como objetivo administrar el stock y ventas de productos para pequeños y medianos negocios. `,
          desc2:"Ademas permite la gestion de cuentas corrientes de clientes como la visualicacion de datos semanasles y mensuales tanto de ventas como de deudores.",
          tec: [
            ["TypeScript","https://www.svgrepo.com/show/354478/typescript-icon.svg"],
            ["Nextjs",`https://www.svgrepo.com/show/368858/nextjs.svg`],
            ["PostgreSQL","https://www.svgrepo.com/show/354200/postgresql.svg"],
            ["Redux","https://www.svgrepo.com/show/452093/redux.svg"],
            ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
            ["Prisma","https://www.svgrepo.com/show/373776/light-prisma.svg"],
          ],
          url: "https://ag-ventas.vercel.app",
          repo: "https://github.com/LucianoVelasquez/sh.ui",
          viewTec: ["TypeScript","Nextjs","PostgreSQL","Redux","Tailwind","Prisma"]
        },
        {
          id: 2,
          title: "Proyecto Individual - Full Stack",
          typo:"React & API RestFul Spring",
          img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/884shots_so.png"],
          desc: `Proyecto individual que consistió en crear una API REST con Spring Boot, implementando Spring Security entre otras.`,
          desc2: `Se documentó toda la aplicación con Swagger UI. También se desarrolló un sistema de login utilizando React, con deploy completo realizado en AWS.`,
          tec: [
            ["Java","https://www.svgrepo.com/show/452234/java.svg"],
            ["Spring Boot","https://www.svgrepo.com/show/376350/spring.svg"],
            ["PostgreSQL","https://www.svgrepo.com/show/354200/postgresql.svg"],
            ["AWS","https://www.svgrepo.com/show/448266/aws.svg"],
            ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
            ["TypeScript","https://www.svgrepo.com/show/354478/typescript-icon.svg"],
            ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
          ],
          url: "https://springboot-api-wfnm.onrender.com/swagger-ui/index.html",
          repo: "https://github.com/LucianoVelasquez/springboot-API",
          viewTec: ["Java","Spring Boot","AWS","Vite","Tailwind","TypeScript","PostgreSQL"]
        },
        {
            id: 3,
            title: "Proyecto Individual - Front end",
            typo:"App R&M",
            img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/720shots_so.jpg"],
            desc: `Proyecto web desarrollado con React y Vite que permita a los usuarios buscar y visualizar información utilizando una API GraphQL`,
            tec: [
              ["React","https://www.svgrepo.com/show/354259/react.svg"],
              ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
              ["Redux","https://www.svgrepo.com/show/452093/redux.svg"],
              ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
              ["GraphQL","https://www.svgrepo.com/show/373644/graphql.svg"],
            ],
            url: "https://challange-rm.vercel.app/",
            repo: "https://github.com/LucianoVelasquez/challange-rm",
            viewTec: ["React","Vite","Redux","Tailwind","GraphQL"]
          },
          {
            id: 4,
            title: "Proyecto Individual - Full Stack",
            typo:"Countries App",
            img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/country2.jpg","https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/1692280768213.jpg","https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/country1.jpg"],
            desc: "Proyecto individual el cual consiste en trabajar con una API de Paises, mostrar su información, filtrarla, ordenarla, realizar búsquedas y un CRUD completo",
            tec: [
              ["JavaScript","https://www.svgrepo.com/show/349419/javascript.svg"],
              ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
              ["NodeJs","https://www.svgrepo.com/show/452075/node-js.svg"],
              ["PostgresSQL","https://www.svgrepo.com/show/354200/postgresql.svg"],
              ["Redux","https://www.svgrepo.com/show/452093/redux.svg"],
              ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
              
            ],
            url: "https://countries-client-vvox.onrender.com/",
            repo: "https://github.com/LucianoVelasquez/countries-client/tree/main",
            viewTec: ["JavaScript","Vite","NodeJs","PostgreSQL","Tailwind"]
          },
          {
            id: 5,
            title: "Proyecto Individual - Front end",
            typo:"Portafolio - V1",
            img: ["https://raw.githubusercontent.com/LucianoVelasquez/portfolio/main/src/utils/131shots_so.png"],
            desc: "Mi primer portafolio, donde presento todos los proyectos en los que he trabajado y también ofrezco información sobre mi trayectoria profesional.",
            tec: [
              ["JavaScript","https://www.svgrepo.com/show/349419/javascript.svg"],
              ["Vite","https://www.svgrepo.com/show/374167/vite.svg"],
              ["Tailwind","https://www.svgrepo.com/show/374118/tailwind.svg"],
              ["React","https://www.svgrepo.com/show/354259/react.svg"],        
            ],
            url: "https://veldev01.vercel.app/",
            repo: "https://github.com/LucianoVelasquez/portfolio",
            viewTec: ["JavaScript","Vite","React","Tailwind"]
          },      
        ]



export default function Page(){
    
        useEffect(()=>{
            setCards(cards3)
            
        },[])

    const [current,setCurrect] = useState<any>("");

    const [newCards,setCards] = useState<any>(cards3);
    const [currentPage, setCurrentPage] = useState(1);




    const typeProyects = [
        {key: "Todos", label: "Todos"},
        {key: "Full Stack", label: "Full Stack"},
        {key: "Front end", label: "Front End"},
        {key: "Back end", label: "Back end"},
    ];

    /* Manejador de filtro de proyectos */
  const hanldeCards = (e : any) =>{

    const value = e.target.value.toString().toLowerCase();
    console.log(value);
    
    
    if(value.includes("todos")){
      setCurrect("Todos");
      return setCards(cards3);
    }

    const newState = cards3.filter(item => item.title.toLowerCase().includes(value));

    setCards(newState);
    
  }

  /* Manejador de busqueda de proyectos */
  const handleSearch = (e : any) =>{

    const value = e.target.value.toString().toLowerCase();

    let array : any= [];

    if(value == "") return setCards(cards3); 

    for (let i = 0; i < cards3.length; i++) {

      for (let j = 0; j < cards3[i].viewTec.length; j++) {

        if(cards3[i].viewTec[j].toLocaleLowerCase().includes(value)){
            
         if(!array.find((item : any) => item.typo == cards3[i].typo)){
          array.push(cards3[i]);
         }
        } 

      } 
    }
     
    setCards(array); 
    
  }

    return(
    <section className="relative flex flex-col gap-x-6 lg:min-h-screen h-screen items-center">

        <div className="flex p-5 w-full justify-evenly items-center flex-col-reverse gap-y-3 lg:flex-row lg:gap-y-0 mt-6 sm:gap-x-5 shadow-lg dark:border-b-1 dark:border-zinc-700">
            <Link href="/"><Button variant="bordered" color="warning"><MoveLeft size={16}/>Volver</Button></Link>

            <div className="flex flex-col lg:flex-row lg:gap-y-0 sm:gap-x-5 gap-y-3">
                <div className="">
                <Input  
                onChange={(e) => handleSearch(e)} type="search" label="Buscar tecnologia" ></Input>
                </div>

                <div className=" flex sm:w-52 w-full flex-wrap md:flex-nowrap gap-4">
                <Select 
                    label="Tipo de proyecto" 
                    className="max-w-xs"
                    variant="bordered"
                    selectedKeys={current}
                    onChange={(e)=> hanldeCards(e)}
                    
                >
                    {typeProyects.map((proyect) => (
                    <SelectItem key={proyect.key} >
                        {proyect.label}
                    </SelectItem>
                    ))}
                </Select>
                </div>
            </div>

            
            <ThemeSwitcher></ThemeSwitcher>
            
      </div>

                
      <div className=" flex flex-wrap gap-x-16 gap-y-8 p-5 justify-center overflow-y-scroll h-[635px]">
        {
          newCards?.length != 0 ? newCards?.map((item : any) =>{
            return(
              <CardFolio key={item.id} id={item.id} title={item.title} img={item.img} imgArray={item.tec} des={item.desc} typo={item.typo} url={item.url} repo={item.repo} tec={item.tec}></CardFolio>
            )
          }):
          <div className="w-[350px] lg:w-[380px] h-350 lg:h-[600px] flex items-center justify-center"><h1>No existen proyectos.</h1></div>
        }

      </div>
    </section>
    )
}
