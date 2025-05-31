import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getEmployees } from "../api/employeesService";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("error with fetching", error);
      }
    };

    fetchData();
  }, []);

  console.log(employees);

  return (
    <TableContainer>
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
        {employees.length === 0 ? (
          <p>No employees found</p>
        ) : (
          employees.map((emp) => (
            <TableRow key={emp.id}>
              <TableCell>{emp.id}</TableCell>
              <TableCell>{emp.firstName}</TableCell>
              <TableCell>{emp.lastName}</TableCell>
              <TableCell>{emp.email}</TableCell>
              <TableCell>{emp.jobTitle}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </TableContainer>
  );
};
export default EmployeesList;
