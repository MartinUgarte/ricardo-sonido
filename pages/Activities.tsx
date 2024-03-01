import {
  Box,
  Grow,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "@fontsource/roboto";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto",
  },
});

theme = responsiveFontSizes(theme);

export default function Activities() {
  const activities = ["Casamientos", "Cumpleaños", "Peñas", "Plazas"];
  const [visibility, setVisibility] = useState(false);

  return (
    <VisibilitySensor
      onChange={(isVisible: boolean) => {
        setVisibility(isVisible);
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        id="Servicios"
      >
        <ThemeProvider theme={theme}>
          {activities.map((activity) => (
            <Grow
              key={activity}
              in={visibility}
              timeout={2000}
              style={{ transformOrigin: "0 0 0", marginTop: 6 }}
            >  
                <Typography variant="h2" color="white">
                  {activity}
                </Typography>
              
            </Grow>
          ))}
        </ThemeProvider>
      </Box>
    </VisibilitySensor>
  );
}
