import React from "react";
import "./App.css";
import LoginPage from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoggedinPage from "./pages/LoggedinPage";
import CreateNewUser from "./pages/CreateNewUser";
import { getToken } from "./service/AuthServices";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!getToken() ? <LoginPage /> : <LoggedinPage />}
        />
        <Route
          path="/loggedinpage"
          element={getToken() ? <LoginPage /> : <LoggedinPage />}
        />
        <Route path="/createnewuser" element={<CreateNewUser />} />
      </Routes>
    </Router>
  );
}

export default App;
