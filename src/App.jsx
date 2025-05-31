import { Route, Routes } from "react-router";
import EmployeesList from "./pages/EmployeesList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EmployeesList />} />
    </Routes>
  );
}

export default App;

