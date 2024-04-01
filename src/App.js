import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Notfoundpage from "./pages/404/NotFoundPage";
import Loginpage from "./pages/auth/LoginPage";
import {LogIn} from "./components/pure/forms/loginForm";
import './App.css';
import SignUp from "./components/pure/forms/sigUpForm";
import RegisterPage from "./pages/auth/RegisterPage";
// import Dashboard from "./pages/dashboard/DashBoard";
// import Profilepage from "./pages/profile/ProfilePage";
// import Homepage from "./pages/home/HomePage";
// import Taskpage from "./pages/tasks/TaskPage";
// import Statepage from "./pages/home/StatePage";

function App() {
  return (
    <div className="App">
    {/* <LogIn></LogIn> */}
    {/* <Loginpage></Loginpage> */}
    <RegisterPage></RegisterPage>
    </div>
  );
}
export default App;