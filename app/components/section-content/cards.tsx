import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, Image,Avatar } from "@nextui-org/react";
import ima1 from "@/public/Visual-data.png"
import { Goal, Rocket } from "lucide-react";


export default function Cards() {
  return (
    <div className="flex flex-col items-center justify-center mt-32 h-auto w-auto gap-y-5 sm:gap-x-5 sm:flex-row sm:gap-y-0 sm:mt-14 sm:h-[250px] sm:w-full">

      <Card className="py-4 bg-opacity-50 w-auto max-w-[380px] h-[272px]" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3">
            <Avatar className="mi_filter" src="https://veldev01.vercel.app/assets/avatar1-35abddbb.png" size="lg" />
            <h4 className="font-bold text-large">Un poco sobre mi</h4>
        </CardHeader>
        <CardBody className="mt-2 h-full">
            <p className="font-normal text-base  text-zinc-400">Desde chico, crecí en un entorno rodeado de tecnología, lo que me motivó a estudiar Analista en Sistemas durante dos años. Posteriormente, fortalecí mis conocimientos participando en un bootcamp, donde me especialicé en el desarrollo front-end.</p>
        </CardBody>
      </Card>
      <Card className="py-4 bg-opacity-50 w-auto max-w-[380px] h-[272px]" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3 mt-3">
            <Rocket size={40} strokeWidth={1.25} />
            <h4 className="font-bold text-large">¿Cuáles son mis habilidades?</h4>
        </CardHeader>
        <CardBody className="mt-2">
            <p className="font-normal text-base text-zinc-400">Tengo experiencia en programación y diseño, además de haber trabajado en otros ámbitos laborales que me han permitido desarrollar habilidades para el trabajo en equipo. Soy una persona curiosa y comprometida con mi desarrollo profesional continuo.</p>
        </CardBody>
      </Card>
      <Card className="py-4 bg-opacity-50 w-auto max-w-[380px] h-[272px]" isHoverable >
        <CardHeader className="pb-0 pt-2 px-4 flex items-center gap-x-3 mt-3">
            <Goal size={40} strokeWidth={1.25} />
            <h4 className="font-bold text-large">¿Qué busco?</h4>
        </CardHeader>
        <CardBody className="mt-2">

            <p className="font-normal text-base text-zinc-400">Busco integrarme en una empresa tecnológica para desarrollarme profesionalmente, aportando mi pensamiento lógico y habilidades técnicas para contribuir significativamente a sus objetivos.</p>
        </CardBody>
      </Card>
      
    </div>
  );
}
