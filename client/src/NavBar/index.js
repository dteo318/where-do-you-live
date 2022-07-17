import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import AddReviewForm from "./AddReviewForm";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
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
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={handleModalOpen}
          >
            Add Review
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={isModalOpen}
        onClose={handleModalClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddReviewForm />
      </Modal>
    </div>
  );
}
