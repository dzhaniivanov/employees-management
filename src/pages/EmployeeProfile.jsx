import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useEmployees } from "../hooks/useEmployees";

const EmployeeProfile = () => {
  const { employees, removeEmployee } = useEmployees();
  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const emp = employees.find((e) => e.id === id);
    if (emp) {
      setEmployee(emp);
    }
    setLoading(false);
  }, [id, employees]);

  const handleDelete = async () => {
    try {
      await removeEmployee(id);
      navigate("/");
    } catch (error) {
      console.error("failed to delete employee", error);
    }
  };

  if (loading) {
    return (
      <Box textAlign="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (!employee) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h6">Employee not found</Typography>
      </Box>
    );
  }

  return (
    <Paper sx={{ maxWidth: 600, margin: "2rem auto", padding: "2rem" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4" gutterBottom>
          {employee.firstName} {employee.lastName}
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        <strong>Email:</strong> {employee.email}
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Job title:</strong> {employee.jobTitle}
      </Typography>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete ${employee.firstName}{" "}
            {employee.lastName} record from databse?This action cannot be
            undone.
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
      <Stack direction="row" spacing={2} mt={2}>
        <Button
          variant="outlined"
          onClick={() => navigate(`/employees/${id}/edit`)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setOpenDialog(true)}
        >
          Delete
        </Button>
      </Stack>
    </Paper>
  );
};
export default EmployeeProfile;
