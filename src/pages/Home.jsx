import { Box, Button, Container, Typography } from "@mui/material";
import EmployeesList from "../components/EmployeesList";

const Home = () => {
  return (
    <Container maxWidth="md">
      <EmployeesList />
    </Container>
  );
};
export default Home;
