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
import { ThemeSwitcher } from "./ThemeSwitcher";

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
        <a href="#contactame"><Button variant="light" color="default" >Contactame</Button></a>
        <a href="https://drive.google.com/file/d/1aeFys8TwzQiJ6DVbvX8xydCROfRdNNpt/view" target="_blank"><Button variant="light" color="secondary" >Descargar CV</Button></a>
        </NavbarBrand>

        <NavbarMenu>
          <NavbarMenuItem>
            <Link color={"primary"} className="ml-20" href="#" size="lg">
              Link
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </NavbarContent>

      <NavbarContent justify="end">
        
        <ThemeSwitcher></ThemeSwitcher>
      </NavbarContent>
    </Navbar>
  );
}
