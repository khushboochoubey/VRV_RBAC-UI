import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserManagement from "./pages/UserManagement";
import RoleManagement from "./pages/RoleManagement";
import PermissionManagement from "./pages/PermissionManagement";
import "../styles/AdminPage.css";

function AdminPage() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Admin Panel</h1>
        </div>
        <nav className="nav-menu">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Dashboard
          </NavLink>
          <NavLink to="/users" className={({ isActive }) => (isActive ? "active" : "")}>
            User Management
          </NavLink>
          <NavLink to="/roles" className={({ isActive }) => (isActive ? "active" : "")}>
            Role Management
          </NavLink>
          <NavLink to="/permissions" className={({ isActive }) => (isActive ? "active" : "")}>
            Permission Management
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/roles" element={<RoleManagement />} />
          <Route path="/permissions" element={<PermissionManagement />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminPage;
