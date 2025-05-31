import { Box, Button, Container, Typography } from "@mui/material";
import EmployeesList from "../components/EmployeesList";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={5} mb={3}>
        <Typography variant="h4" gutterBottom>
          Employee Management System
        </Typography>
        <Button variant="outlined" onClick={() => navigate("/add-employee")}>
          Add Employee
        </Button>
      </Box>
      <EmployeesList />
    </Container>
  );
};
export default Home;
