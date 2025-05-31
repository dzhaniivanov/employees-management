import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EmployeeProfile from "./pages/EmployeeProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/employees/:id" element={<EmployeeProfile />} />
    </Routes>
  );
}

export default App;

