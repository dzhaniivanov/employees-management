import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EmployeeProfile from "./pages/EmployeeProfile";
import EditEmployee from "./pages/EditEmployee";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/employees/:id" element={<EmployeeProfile />} />
      <Route path="/employees/:id/edit" element={<EditEmployee />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

