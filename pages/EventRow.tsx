/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Divider,
  Fade,
  Grow,
  ThemeProvider,
  Typography,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";
import VisibilitySensor from "react-visibility-sensor";

export default function EventRow({
  url1,
  url2,
}: {
  url1: string;
  url2: string;
}) {
  const [visibility, setVisibility] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible: boolean) => {
        setVisibility(isVisible);
      }}
    >
      <Fade in={visibility} timeout={2000}>
        <Box
          display="flex"
          flex="1"
          flexDirection={{ sm: "row", xs: "column" }}
          sx={{ mt: 5, width: "80%", height: "100%" }}
        >
          <ReactPlayer
            url={url1}
            style={{ marginRight: 40 }}
            width="100%"
            height="100%"
            
          />
          <ReactPlayer
            url={url2}
            width="100%"
            height="100%"
          />
        </Box>
      </Fade>
    </VisibilitySensor>
  );
}
