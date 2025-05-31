import { Box, CircularProgress, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getEmployeeById } from "../api/employeesService";
import { useNavigate, useParams } from "react-router";
import EmployeeForm from "../components/EmployeeForm";
import { validateEmployee } from "../helpers/validateEmployee";
import { useEmployees } from "../hooks/useEmployees";

const EditEmployee = () => {
  const { editEmployee } = useEmployees();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const data = await getEmployeeById(id);
        setFormData(data);
      } catch (error) {
        console.error("failed to fetch employee", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateEmployee(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      await editEmployee(id, formData);
      navigate(`/employees/${id}`);
    } catch (error) {
      console.error("error with updating employee", error);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Paper sx={{ maxWidth: 500, margin: "2rem auto", padding: "2rem" }}>
      <Typography variant="h5" align="center" gutterBottom>
        Edit employee
      </Typography>
      <EmployeeForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        formErrors={formErrors}
        submitLabel="Save Changes"
      />
    </Paper>
  );
};
export default EditEmployee;
