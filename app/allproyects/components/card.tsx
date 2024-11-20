import { Button, Card, CardBody, CardFooter, CardHeader ,Image} from "@nextui-org/react";
/* import {Image} from 'next/image'; */
import { handleColor } from "@/app/components/cardPortafolio";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';

export default function CardFolio({
  title,
  img,
  id,
  imgArray,
  des,
  typo,
  url,
  repo,
  tec
}: any) {


  return (
    <>
      <Card  className={` w-[350px] lg:w-[420px] h-350 lg:h-[600px]`}>
        <CardHeader className="flex justify-center items-center pt-5">
          <Image isBlurred width={350} height={250} className="object-fill" alt="" src={img[0]} />
        </CardHeader>
        <CardBody className="overflow-hidden">
          <h1 className="text-2xl text-center font-medium" >{typo}</h1>
          <h2 className="text-lg text-center font-normal">{title}</h2>
          <h3 className="text-base font-light text-zinc-400 mt-2">{des}</h3>
          
          <div className="flex flex-wrap justify-center sm:justify-start sm:items-start gap-x-2 gap-y-2 sm:gap-x-2 mt-2 sm:gap-y-2 ">
            {
              tec.map((array : any) =>{
                  return (
                      <Card key={uuidv4()} className={`p-1.5 bg-opacity-40 shadow-sm ${handleColor(array[0])}`}>
                          <div className="flex gap-x-2 justify-center items-center">
                          <Image
                                width={0}
                                height={0}
                                  alt=""
                                  className="rounded-sm w-5 h-5 sm:w-4 sm:h-4 object-contain"
                                  src={array[1]}
                              />
                              <h1 className="font-light text-base sm:text-xs">{array[0]}</h1>
                          </div>
                      </Card>
                  )
              })
            }
          </div>
          </CardBody>
          <CardFooter className="z-10 items-end justify-end " >
          <div className=" flex justify-end sm:justify-end items-end gap-x-5 "> {/* sm:absolute sm:bottom-0 sm:left-0 */}
                      {
                        repo != "" ? <a href={repo} target="_blank"><Button variant="faded" color="primary" className="bg-opacity-80" size={"lg"}>Para mas Info<Github size={20} /></Button></a> : ""
                      }
                        <a href={url} target="_blank">
                        <Button variant="faded" color="default" size={"lg"}>Demo <SquareArrowOutUpRight size={16} /></Button></a>
                    </div>
          </CardFooter>
          
        
      </Card>
    </>
  );
}
