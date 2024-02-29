/* eslint-disable react/no-unescaped-entities */
import { Box, Divider, Grow, Typography } from "@mui/material";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

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
      <Typography
        variant="h5"
        color="white"
        align="justify"
        sx={left ? { ml: 10, maxWidth: '500px' } : { mr: 10, maxWidth: '500px' }}
      >
        "{text}"
      </Typography>
      <Divider sx={{ width: "40%", mt: 2 }} color="white" />
      <Typography
        variant="h6"
        color="grey"
        sx={left ? { ml: 70, maxWidth: '500px', mt: 2 } : { mr: 70, maxWidth: '500px', mt: 2 }}
      >
        Isabel Rodriguez
      </Typography>
    </Box>
    </Grow>
    </VisibilitySensor>
  );
}
