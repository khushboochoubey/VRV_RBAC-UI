import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import "./styles/index.css";
import Dashboard from "./components/Dashboard.js";
import UserManagement from "./components/pages/UserManagement.js";
import RoleManagement from "./components/pages/RoleManagement.js";
import PermissionManagement from "./components/pages/PermissionManagement.js";

// Import Admin Page
import AdminPage from "./components/AdminPage"; // Import AdminPage

// User Page
import UserPage from "./components/UserPage";

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Manage user/admin state
  const [users, setUsers] = useState([]); // Ensure users is always an array

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <header className="navbar">
          <div className="navbar-brand">
            <Link to="/">RBAC</Link>
          </div>
          <nav className="navbar-links">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
              About
            </NavLink>

            <div className="login-dropdown">
              <button className="dropdown-btn">Login</button>
              <div className="dropdown-content">
                <LoginButton handleLogin={setIsAdmin} />
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={isAdmin ? <AdminPage /> : <UserPage />} />
            <Route path="/admin" element={<AdminPage />} /> {/* Admin route */}
            <Route path="/dashboard" element={isAdmin ? <Dashboard users={users} /> : <Home />} />
            <Route path="/users" element={isAdmin ? <UserManagement users={users} setUsers={setUsers} /> : <Home />} />
            <Route path="/roles" element={isAdmin ? <RoleManagement /> : <Home />} />
            <Route path="/permissions" element={isAdmin ? <PermissionManagement /> : <Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 RBAC Application | All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
}

function LoginButton({ handleLogin }) {
  const navigate = useNavigate(); // useNavigate should be used inside this component

  const handleLoginClick = (role) => {
    handleLogin(role === "admin");
    if (role === "admin") {
      navigate("/admin"); // Redirect to AdminPage when logged in as admin
    } else {
      navigate("/user"); // Redirect to UserPage when logged in as user
    }
  };

  return (
    <>
      <button onClick={() => handleLoginClick("user")}>As User</button>
      <button onClick={() => handleLoginClick("admin")}>As Admin</button>
    </>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the RBAC Application</h1>
      <p>This is a Role-Based Access Control System.</p>
    </div>
  );
}

function About() {
  return (
    <div className="about">
      <h1>About RBAC</h1>
      <p>Role-Based Access Control (RBAC) is a security approach that restricts system access based on roles assigned to users. It is widely used in information security to manage user permissions efficiently and enforce the principle of least privilege, ensuring that users have access only to the resources necessary for their job functions.</p>
    </div>
  );
}

export default App;


