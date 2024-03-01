import {
  Box,
  Fade,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import '@fontsource/roboto';

let theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

theme = responsiveFontSizes(theme);

export default function Bio() {
  const [visibility, setVisibility] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible: boolean) => {
        setVisibility(isVisible);
      }}
      partialVisibilityTop={true}
    >
      <Fade in={visibility} timeout={2000}>
        <Box
          display="flex"
          flexDirection={{sm: 'row', xs: 'column'}}
          justifyContent="space-around"
          alignItems="center"
          height="50vh"
          id="Acerca"
        >
          <Image
            src="/img/7.png"
            alt="Ricardo Ugarte"
            width={350}
            height={300}
            style={{ borderRadius: "10%" }}
          />
          <ThemeProvider theme={theme}>
            <Typography
              variant="h5"
              color="white"
              align="justify"
              sx={{ maxWidth: "600px", ml: {sm: 6, xs: 0}, mx: {sm: 0, xs: 3}, mt: {sm: 0, xs: 3} }}
            >
              Ricardo Ugarte es un ingeniero electrónico. Con experencia en lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula
              id dui quis dignissim. Nam lectus magna, ultrices nec leo non,
              ultrices finibus nisl. Cras eu mi sem. Cras in.
            </Typography>
          </ThemeProvider>
        </Box>
      </Fade>
    </VisibilitySensor>
  );
}
