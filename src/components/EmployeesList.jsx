import {
  Box,
  CircularProgress,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import { useEmployees } from "../hooks/useEmployees";
import { useEffect, useState } from "react";
import { filterEmployees } from "../helpers/filterEmployees";

const EmployeesList = () => {
  const { employees, loading } = useEmployees();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      const filtered = filterEmployees(employees, searchTerm);
      setFilteredEmployees(filtered);
    }, 300);
    return () => clearTimeout(delay);
  }, [searchTerm, employees]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextField
        label="Search..."
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        margin="normal"
        fullWidth
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>ID</strong>
              </TableCell>
              <TableCell>
                <strong>First Name</strong>
              </TableCell>
              <TableCell>
                <strong>Last Name</strong>
              </TableCell>
              <TableCell>
                <strong>Email</strong>
              </TableCell>
              <TableCell>
                <strong>Position</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredEmployees.length === 0 ? (
              <TableRow>
                <TableCell>No employees found</TableCell>
              </TableRow>
            ) : (
              filteredEmployees.map((emp) => (
                <TableRow
                  key={emp.id}
                  hover
                  onClick={() => navigate(`/employees/${emp.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{emp.id}</TableCell>
                  <TableCell>{emp.firstName}</TableCell>
                  <TableCell>{emp.lastName}</TableCell>
                  <TableCell>{emp.email}</TableCell>
                  <TableCell>{emp.jobTitle}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default EmployeesList;
