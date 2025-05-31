import { Box, Button, TextField, Typography } from "@mui/material";

const EmployeeForm = ({
  formData,
  onChange,
  onSubmit,
  isSubmitting = false,
  submitLabel = "Submit",
  formErrors = {},
}) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <TextField
        fullWidth
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={onChange}
        required
        error={formErrors.firstName}
        helperText={formErrors.firstName}
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        fullWidth
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={onChange}
        required
        error={formErrors.lastName}
        helperText={formErrors.lastName}
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        fullWidth
        label="Email"
        name="email"
        value={formData.email}
        onChange={onChange}
        required
        error={formErrors.email}
        helperText={formErrors.email}
        sx={{ marginBottom: "1rem" }}
      />
      <TextField
        fullWidth
        label="Job Title"
        name="jobTitle"
        value={formData.jobTitle}
        onChange={onChange}
        required
        error={formErrors.jobTitle}
        helperText={formErrors.jobTitle}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ marginTop: "1rem" }}
        fullWidth
        disabled={isSubmitting}
        data-cy="submit-btn"
      >
        {submitLabel}
      </Button>
    </Box>
  );
};
export default EmployeeForm;
