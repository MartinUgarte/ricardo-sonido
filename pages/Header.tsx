import {
  Box,
  Button,
  Fade,
  IconButton,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import backgroundPic from "../public/img/5_dark.png";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-scroll";
import '@fontsource/bebas-neue';

let theme = createTheme({
  typography: {
    fontFamily: "Bebas Neue",
  },
});

theme = responsiveFontSizes(theme);


export default function Header() {
  const [visibility, setVisibility] = useState(false);
  return (
    <Box
      id="Home"
      sx={{
        backgroundImage: `url(${backgroundPic.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white",
        height: "90vh",
      }}
    >
      <VisibilitySensor
        onChange={(isVisible: boolean) => {
          setVisibility(isVisible);
        }}
      >
        <Fade in={visibility} timeout={2000}>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            height="100%"
          >
            <Box
              width="100%"
              height="80%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              sx={{ mt: 10 }}
            >
              <ThemeProvider theme={theme}>
                <Typography variant="h1" color="white">
                  Ricardo Ugarte
                </Typography>
                <Typography variant="h2" color="#ffc803">
                  Sonido e Iluminación
                </Typography>
              </ThemeProvider>

            </Box>

            <Box
              width="100%"
              height="20%"
              display="flex"
              justifyContent="center"
              alignItems="flex-end"
            >
              <Link
                to="Acerca"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >              
              <IconButton>
                <KeyboardArrowDownIcon sx={{ color: "white", mb: 5, fontSize: '80px'}} />
              </IconButton>    
              </Link>          
            </Box>
          </Box>
        </Fade>
      </VisibilitySensor>
    </Box>
  );
}
