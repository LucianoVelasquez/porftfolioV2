import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./components/providers";


const noto_sans = Noto_Sans({
  subsets : ["latin"]
});

export const metadata: Metadata = {
  title: "Vel Dev",
  icons:{
    icon: "/icon-new.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <body className={noto_sans.className}>
        <Providers>
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
