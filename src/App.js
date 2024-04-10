import "./App.css";
import Dashboard from "./compoents/Dashboard";
import ForgotPassword from "./compoents/ForgotPassword";
import StandardForm from "./compoents/StandardForm";
import { Route, Routes, Router, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StandardForm />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </BrowserRouter>

    // <div className="App">
    //  <StandardForm/>
    // </div>
  );
}

export default App;
