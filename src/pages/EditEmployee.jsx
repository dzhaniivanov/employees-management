import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { updateEmployee } from "../api/employeesService";
import { useNavigate, useParams } from "react-router";

const EditEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, formData);
      navigate(`/employees/${id}`);
    } catch (error) {
      console.error("error with updating employee", error);
    }
  };
  return (
    <Paper sx={{ maxWidth: 500, margin: "2rem auto", padding: "2rem" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Edit employee
      </Typography>
      <Box component="form" noValidate>
        <TextField
          variant="outlined"
          label="First Name"
          fullWidth
          name="firstName"
          required
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />

        <TextField
          variant="outlined"
          fullWidth
          label="Last Name"
          name="lastName"
          required
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Email"
          name="email"
          type="email"
          required
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          fullWidth
          label="Job Title"
          name="jobTitle"
          required
          sx={{ marginBottom: "1rem" }}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Box>
    </Paper>
  );
};
export default EditEmployee;
