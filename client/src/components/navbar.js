import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";

const pages = ["About", "Map", "Add Review"];

export default function Navbar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <HomeIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <NavLink key={"home"} to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "roboto",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "white",
                }}
              >
                Where do you live?
              </Typography>
            </NavLink>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "20%",
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/${page.toLowerCase()}`}
                style={{ textDecoration: "none" }}
              >
                <Typography sx={{ color: "white", display: "block" }}>
                  {page}
                </Typography>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
