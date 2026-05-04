import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import  HomePage from "./pages/HomePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

