import { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

export const useEmployees = () => useContext(EmployeeContext);
