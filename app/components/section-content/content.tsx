'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";




export default function Content() {
    
    const [isMovil,setIsmovil] = useState<any>(0);

    useEffect(()=>{

        if (typeof window !== 'undefined') {
            
            setIsmovil(window.innerWidth);
          }

    },[])

      const SilVariantsMovil : any = {
        initial: {
          x: "155%",
        },
        animate: {
          x: "-145%",
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 25,
          },
        },
      };

       
      const SilVariants : any = {
        initial: {
          x: "80%",
        },
        animate: {
          x: "-105%",
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 50,
          },
        },
      }; 

  return (
    <div className="flex-col text-center justify-center items-center mt-20 sm:mt-28 ">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-5">Tecnologias que utilizo</h1>
        <motion.div
            variants={isMovil < 430? SilVariantsMovil : SilVariants}
            initial="initial"
            animate="animate"
            className=" absolute  mi_filter"
        >
            <div className="flex justify-center items-center select-none gap-x-3 sm:gap-x-7 ">
                    <div className="flex-none">
                    <img
                        className="h-32 w-24 mr-2"
                        src="https://www.svgrepo.com/show/452228/html-5.svg"
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-32 w-24 mr-2"
                        src="https://www.svgrepo.com/show/452185/css-3.svg"
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-28 w-20 mr-5"
                        src="https://www.svgrepo.com/show/354478/typescript-icon.svg"
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-32 w-24 mr-5"
                        src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-32 w-24 mr-5"
                        src="https://www.svgrepo.com/show/373929/node.svg"
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-28 w-24 mr-5"
                        src="https://www.svgrepo.com/show/374118/tailwind.svg"
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-28 w-28 mr-5"
                        src="https://www.svgrepo.com/show/354112/nextjs.svg "
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-32 w-24 mr-5"
                        src="https://www.svgrepo.com/show/452093/redux.svg"
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-28 w-20 mr-5"
                        src="https://www.svgrepo.com/show/354200/postgresql.svg"
                    ></img>
                    </div>
                    <div className="flex-none">
                    <img
                        className="h-32 w-24 mr-5"
                        src="https://www.svgrepo.com/show/376356/aws.svg"
                    ></img>
                    </div>
                </div>
        </motion.div>
        <div className="flex flex-col sm:flex-row sm:flex justify-center mx-9 sm:mx-0 gap-y-4 sm:gap-y-0 sm:gap-x-12 sm:w-full h-44 mt-72 sm:mt-64 ">
                <div>
                    <img alt="content1" className="object-center h-full w-full" src="https://github-readme-stats.vercel.app/api?username=LucianoVelasquez&show_icons=true&count_private=true&hide_border=true"></img>
                </div>
                <div>
                    <img alt="content2" className="object-center h-full w-full" src="https://camo.githubusercontent.com/82b3cec2c83d0834f25226278c5ec01fdc5c2d42fd3c85c5ba5285bbe2d1c750/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d4c756369616e6f56656c61737175657a26686964655f626f726465723d74727565266c61796f75743d636f6d70616374"></img>
                </div> 
        </div>
    </div>
  );
}
