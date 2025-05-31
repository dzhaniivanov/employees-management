export const validateEmployee = (formData) => {
  const errors = {};
  if (!formData.firstName.trim()) {
    errors.firstName = "First Name is required";
  }
  if (!formData.lastName.trim()) {
    errors.lastName = "Last Name is required";
  }
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }
  if (!formData.jobTitle.trim()) {
    errors.jobTitle = "Job Title is required";
  }
  return errors;
};
