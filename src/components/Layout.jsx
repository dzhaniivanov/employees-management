import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Employee Management System
          </Typography>
          <Box sx={{ ml: "auto" }}>
            <Button color="inherit" onClick={() => navigate("/add-employee")}>
              Add Employee
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="main">
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </Box>
    </>
  );
};
export default Layout;
