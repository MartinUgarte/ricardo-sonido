import { Box, CardMedia, Fade, Typography } from "@mui/material";
import { useState } from "react";
import ReactPlayer from "react-player";
import VisibilitySensor from "react-visibility-sensor";
import EventRow from "./EventRow";

export default function Events() {

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      id="Videos"
    >
      <EventRow url1='https://www.youtube.com/watch?v=4KnZtxY1mRs' url2='https://www.youtube.com/watch?v=a0TnJNTRk3M'/>
      <EventRow url1='https://www.youtube.com/watch?v=FBLXhgnoWkI' url2='https://www.youtube.com/watch?v=lBFEKug9gC8'/>
    </Box>
  );
}
