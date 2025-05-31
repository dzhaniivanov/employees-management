import { Box, Button, Container, Typography } from "@mui/material";
import EmployeesList from "../components/EmployeesList";

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box textAlign="center" mt={5} mb={3}>
        <Typography variant="h4" gutterBottom>
          Employee Management System
        </Typography>
        <Button variant="outlined" onClick={() => console.log("click")}>
          Add Employee
        </Button>
      </Box>
      <EmployeesList />
    </Container>
  );
};
export default Home;
