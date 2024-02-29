import { Box, CardMedia, Fade, Typography } from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";
import VisibilitySensor from "react-visibility-sensor";

export default function Events() {
  const [visibility, setVisibility] = useState(false);
  const [visibility2, setVisibility2] = useState(false);
  const [visibility3, setVisibility3] = useState(false);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      id='videos'
    >
      <VisibilitySensor
        onChange={(isVisible: boolean) => {
          setVisibility2(isVisible);
        }}
      >
        <Fade in={visibility2} timeout={2000}>
          <Box display="flex" flexDirection="row" sx={{mt: 5}}>
            <ReactPlayer
              style={{ marginRight: 40 }}
              url="https://www.youtube.com/watch?v=4KnZtxY1mRs"
            />
            <ReactPlayer url="https://www.youtube.com/watch?v=a0TnJNTRk3M" />
          </Box>
        </Fade>
      </VisibilitySensor>
      <VisibilitySensor
        onChange={(isVisible: boolean) => {
          setVisibility3(isVisible);
        }}
      >
        <Fade in={visibility3} timeout={2000}>
          <Box display="flex" flexDirection="row" sx={{mt: 5}}>
            <ReactPlayer
              style={{ marginRight: 40 }}
              url="https://www.youtube.com/watch?v=FBLXhgnoWkI"
            />
            <ReactPlayer url="https://www.youtube.com/watch?v=lBFEKug9gC8" />
          </Box>
        </Fade>
      </VisibilitySensor>
    </Box>
  );
}
