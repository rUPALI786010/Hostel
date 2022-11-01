import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './CSS/commonforall.css';
import './CSS/fonts.css';
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/login/register";
function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
