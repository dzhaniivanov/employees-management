const BASE_URL = "http://localhost:3001/employees";

export const getEmployees = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("failed to fetch employees");
  }
  return res.json();
};
