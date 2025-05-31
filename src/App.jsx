import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-employee" element={<AddEmployee />} />
    </Routes>
  );
}

export default App;

