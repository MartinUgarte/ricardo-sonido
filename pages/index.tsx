import { Box, Typography } from "@mui/material";
import Header from "./Header";
import Bio from "./Bio";
import Events from "./Events";
import Activities from "./Activities";
import Contact from "./Contact";
import Recomendations from "./Recomendations";
import { useState, useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Navbar from "./Navbar";

const pages = ['Acerca', 'Servicios', 'Videos', 'Opiniones', 'Contacto'];

export default function Home() {
  const [color, setColor] = useState(true);
  const myRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false)
  const isInView = useInView(myRef, { once: false, amount: 0.8});  
  
  useEffect(() => {
    if (isInView) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [isInView])

  useEffect(() => {
    setIsClient(true)
  }, [])

  const sections = [
    <Bio key="bio" />,
    <Activities key="activies" />,
    <Events key="events" />,
    <Recomendations key='recomendations' />,
    <Contact key="contact" />,
  ];
  return isClient ? (
    <Box
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ maxHeight: '800vh', backgroundColor: "black", overflow: "hidden" }}
    >
      <Navbar color={color} />
      <section ref={myRef}>
        <Header />
      </section>
      
      {sections.map((section, i) => (
        <Box key={section.key} width="100%" sx={{mt: 5}}>
            {section}          
        </Box>
      ))}
    </Box>
  ) : (
    'Loading'
  )
}
