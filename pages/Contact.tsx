import {
  Box,
  Divider,
  Fade,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

let theme = createTheme();

theme = responsiveFontSizes(theme);

export default function Contact() {
  const [visibility, setVisibility] = useState(false);

  return (
    <Box height="45vh" sx={{ backgroundColor: "#876c0c", marginTop: 20 }}>
      <VisibilitySensor
        onChange={(isVisible: boolean) => {
          setVisibility(isVisible);
        }}
      >
        <Fade in={visibility} timeout={2000}>
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            id="Contacto"
          >
            <ThemeProvider theme={theme}>
              <Typography variant="h3" color="white" sx={{ mt: 5, mb: 2 }}>
                Contacto
              </Typography>
              <Divider sx={{ width: "50%" }} color="white" />
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 10 }}
              >
                <Image
                  src="/img/wsp.png"
                  alt="Whatsapp"
                  layout="fixed"
                  width={40}
                  height={40}
                />
                <Typography variant="h5" color="white" sx={{ ml: 2 }}>
                  11-3662-8504
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Image
                  src="/img/mail.svg.png"
                  alt="Mail"
                  layout="fixed"
                  width={40}
                  height={40}
                />
                <Typography variant="h5" color="white" sx={{ ml: 2 }}>
                  ricardougarte2010@gmail.com
                </Typography>
              </Box>
            </ThemeProvider>
          </Box>
        </Fade>
      </VisibilitySensor>
    </Box>
  );
}
