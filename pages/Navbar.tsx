import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { Link } from "react-scroll";

export default function Navbar({ color }: { color: boolean }) {
  const [open, setOpen] = useState(false);
  const links = ["Acerca", "Servicios", "Videos", "Opiniones", "Contacto"];
  const handleNav = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: color ? "transparent" : "#876c0c" }}
      >
        <Toolbar>
          <Button color="inherit" size="large">
            <GraphicEqIcon sx={{mr: 2}} />
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
            >
              <Typography variant="h6">RICARDO UGARTE</Typography>
            </Link>
          </Button>

          <Box
            display="flex"
            flexDirection="row"
            width="75%"
            justifyContent="center"
          >
            <Button color="inherit" size="large">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Acerca
              </Link>
            </Button>
            <Button color="inherit" size="large">
              <Link
                to="activities"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Servicios
              </Link>
            </Button>
            <Button color="inherit" size="large">
              <Link
                to="videos"
                spy={true}
                smooth={true}
                offset={-50}
                duration={1000}
              >
                Videos
              </Link>
            </Button>
            <Button color="inherit" size="large">
              <Link
                to="recomendations"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Opiniones
              </Link>
            </Button>
            <Button color="inherit" size="large">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                Contacto
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
