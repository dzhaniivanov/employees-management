import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router";

const EmployeeProfile = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Paper sx={{ maxWidth: 600, margin: "2rem auto", padding: "2rem" }}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h4" gutterBottom>
          John Doe
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        <strong>Email:</strong> test@gmail.com
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Job title:</strong> QA Engineer
      </Typography>
      <Stack direction="row" spacing={2} mt={2}>
        <Button
          variant="outlined"
          onClick={() => navigate(`/employees/${id}/edit`)}
        >
          Edit
        </Button>
        <Button variant="contained" color="error" onClick={() => {}}>
          Delete
        </Button>
      </Stack>
    </Paper>
  );
};
export default EmployeeProfile;
