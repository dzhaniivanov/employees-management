import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { validateEmployee } from "../helpers/validateEmployee";
import EmployeeForm from "../components/EmployeeForm";
import { useEmployees } from "../hooks/useEmployees";

const AddEmployee = () => {
  const { addNewEmployee } = useEmployees();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateEmployee(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      await addNewEmployee(formData);
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
      <EmployeeForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        formErrors={formErrors}
        submitLabel="Add employee"
      />
    </Paper>
  );
};
export default AddEmployee;
