import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Menu,
  MenuList,
  MenuItem,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Acerca", "Servicios", "Videos", "Recomendaciones", "Contacto"];

export default function Navbar({ color }: { color: boolean }) {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: color ? "transparent" : "#876c0c", transition: "background-color 0.5s ease-in-out"}}
      >
        <Toolbar>
          <Box
            display="flex"
            flexDirection="row"
            width={{ xs: "100%", md: "20%" }}
            justifyContent="flex-start"
          >
            <Button color="inherit" size="large">
              <GraphicEqIcon sx={{ mr: 2 }} />
              <Link
                to="Home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={1000}
              >
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  RICARDO UGARTE
                </Typography>
              </Link>
            </Button>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              sx={{ display: { xs: "flex", md: "none" }, ml: 2, mt: 5}}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i}>
                  <Button color="inherit" size="large">
                    <Link
                      to={page}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={1000}
                    >
                      {page}
                    </Link>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            width="80%"
            justifyContent="flex-end"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page, i) => (
              <Button color="inherit" size="large" key={i}>
                <Link
                  to={page}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
