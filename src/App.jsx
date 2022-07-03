import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Register from "./Components/Register";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}
