import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { addEmployee } from "../api/employeesService";
import { useNavigate } from "react-router";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployee(formData);
      navigate("/");
    } catch (error) {
      console.error("error with adding employee", error);
    }
  };

  return (
    <Paper sx={{ maxWidth: 500, margin: "2rem auto", padding: "2rem" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Add new employee
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ marginBottom: "1rem" }}
        />
        <TextField
          fullWidth
          label="Job Title"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          sx={{ marginTop: "1rem" }}
          fullWidth
        >
          Add employee
        </Button>
      </Box>
    </Paper>
  );
};
export default AddEmployee;
