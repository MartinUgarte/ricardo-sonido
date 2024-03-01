import { Box, Divider, Grow, Typography } from "@mui/material";
import { useState } from "react";
import Recomendation from "./Recomentation";

export default function Recomendations() {
  const textos = [
    "Gracias por el impecable servicio de sonido e iluminación. Su profesionalismo hizo brillar nuestro evento. ¡Excelente trabajo!",
    "La pasamos muy bien bailando. Lograron que nuestra fiesta brillara. ¡Un lujo trabajar con ustedes!",
    "¡Excelente servicio! ¡Muy buena onda! ¡Muy recomendable!",
  ];
  return (
    <Box id='Recomendaciones'>
      {textos.map((texto, i) => (
        <Recomendation key={i} text={texto} left={i % 2 == 0 ? true : false} />
      ))}
    </Box>
  );
}
