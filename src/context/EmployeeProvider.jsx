import { useEffect, useState } from "react";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../api/employeesService";
import { EmployeeContext } from "./EmployeeContext";

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("error with fetching", error);
    } finally {
      setLoading(false);
    }
  };

  const addNewEmployee = async (employeeData) => {
    const newEmployee = await addEmployee(employeeData);
    setEmployees((prev) => [...prev, newEmployee]);
  };

  const editEmployee = async (employeeId, updatedData) => {
    const updatedEmployee = await updateEmployee(employeeId, updatedData);
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === employeeId ? updatedEmployee : employee
      )
    );
  };

  const removeEmployee = async (id) => {
    await deleteEmployee(id);
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        loading,
        fetchEmployees,
        addNewEmployee,
        editEmployee,
        removeEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
