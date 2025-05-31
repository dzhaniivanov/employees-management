const BASE_URL = "http://localhost:3001/employees";

export const getEmployees = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) {
    throw new Error("failed to fetch employees");
  }
  return res.json();
};

export const addEmployee = async (employee) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  if (!res.ok) {
    throw new Error("failed to add employee");
  }
  return res.json();
};

export const updateEmployee = async (id, employee) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });
  if (!res.ok) {
    throw new Error("failed to update employee");
  }
  return res.json();
};

export const getEmployeeById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) {
    throw new Error("failed to fetch employee");
  }
  return res.json();
};

export const deleteEmployee = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("failed to delete employee");
  }
  return res.json();
};
