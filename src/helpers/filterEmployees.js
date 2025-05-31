export const filterEmployees = (employees, searchTerm) => {
  return employees.filter((emp) =>
    [emp.firstName, emp.lastName].some((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
};
