"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import img from "@/public/es.png";
import Image from "next/image";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { ExternalLink } from "lucide-react";
import { URL_CV_DRIVE } from "@/app/consUtils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(true);

  return (
    <Navbar
      isBlurred
      isBordered
      maxWidth="xl"
      className="absolute"
    >
      <NavbarContent justify="start">
        
        <NavbarBrand>
        <a href="#contactame" className="hidden sm:flex"><Button variant="light" color="default" >Contactame</Button></a>
        <Link href="/allproyects" ><Button variant="light">Ver proyectos <ExternalLink size={16} /></Button></Link>
        <a href={URL_CV_DRIVE} target="_blank"><Button variant="light" color="primary" >Descargar CV</Button></a>
        </NavbarBrand>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link color={"primary"} className="ml-20" href="#" size="lg">
              Link
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent className="h-3 w-3 sm:w-auto sm:h-auto" justify="end">
        
        <ThemeSwitcher></ThemeSwitcher>
      </NavbarContent>
    </Navbar>
  );
}
