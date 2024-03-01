/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Divider,
  Grow,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

let theme = createTheme();

theme = responsiveFontSizes(theme);

export default function Recomendation({
  text,
  left,
}: {
  text: string;
  left: boolean;
}) {
  const [visibility, setVisibility] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible: boolean) => {
        setVisibility(isVisible);
      }}
    >
      <Grow in={visibility} timeout={2000}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          sx={
            left
              ? { alignItems: "flex-start", mt: 10 }
              : { alignItems: "flex-end", mt: 10 }
          }
        >
          <ThemeProvider theme={theme}>
            <Typography
              variant="h6"
              color="white"
              align="justify"
              sx={
                left
                  ? { ml: {xs: 0, md: 10}, mx: {xs: 3, md: 0}, maxWidth: "500px" }
                  : { mr: {xs: 0, md: 10}, mx: {xs: 3, md: 0}, maxWidth: "500px" }
              }
            >
              "{text}"
            </Typography>
          </ThemeProvider>

          <Divider sx={{ width: "40%", mt: 3 }} color="white" />
          <ThemeProvider theme={theme}>
            <Typography
              variant="h6"
              color="grey"
              sx={
                left
                  ? { ml: {xs: 0, md: 70}, mx: {xs: 3, md: 0}, maxWidth: "500px" }
                  : { mr: {xs: 0, md: 70}, mx: {xs: 3, md: 0}, maxWidth: "500px" }
              }
            >
              Isabel Rodriguez
            </Typography>
          </ThemeProvider>
        </Box>
      </Grow>
    </VisibilitySensor>
  );
}
