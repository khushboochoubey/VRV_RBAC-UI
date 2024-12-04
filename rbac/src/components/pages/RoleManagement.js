import React, { useState } from "react";

const RoleManagement = () => {
  const [roles, setRoles] = useState(["Admin", "Editor", "Viewer"]);
  const [newRole, setNewRole] = useState("");
  const [editRole, setEditRole] = useState("");
  const [updatedRole, setUpdatedRole] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Add Role
  const handleAddRole = () => {
    if (newRole.trim() && !roles.includes(newRole.trim())) {
      setRoles([...roles, newRole.trim()]);
      setNewRole("");
    } else {
      alert("Role already exists or input is invalid.");
    }
  };

  // Edit Role
  const handleEditRole = () => {
    if (editRole && updatedRole.trim() && roles.includes(editRole)) {
      setRoles(
        roles.map((role) => (role === editRole ? updatedRole.trim() : role))
      );
      setEditRole("");
      setUpdatedRole("");
      setIsEditing(false);
    } else {
      alert("Invalid role or role not found.");
    }
  };

  // Delete Role
  const handleDeleteRole = (roleToDelete) => {
    if (window.confirm(`Are you sure you want to delete the role "${roleToDelete}"?`)) {
      setRoles(roles.filter((role) => role !== roleToDelete));
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Role Management</h1>

      {/* Add Role Section */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
          placeholder="Enter new role"
          style={{
            marginRight: "10px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleAddRole}
          style={{
            padding: "8px 12px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Add Role
        </button>
      </div>

      {/* Edit Role Section */}
      <div style={{ marginBottom: "20px" }}>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: "8px 12px",
              backgroundColor: "#2196f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Edit Role
          </button>
        ) : (
          <div>
            <select
              value={editRole}
              onChange={(e) => setEditRole(e.target.value)}
              style={{
                marginRight: "10px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="">Select role to edit</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={updatedRole}
              onChange={(e) => setUpdatedRole(e.target.value)}
              placeholder="Enter updated role name"
              style={{
                marginRight: "10px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={handleEditRole}
              style={{
                padding: "8px 12px",
                backgroundColor: "#ff9800",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              Update Role
            </button>
          </div>
        )}
      </div>

      {/* List of Roles */}
      <h2>Existing Roles</h2>
      <table
        border="1"
        style={{
          width: "100%",
          textAlign: "left",
          borderCollapse: "collapse",
          marginTop: "10px",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "10px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #ddd",
              }}
            >
              Role
            </th>
            <th
              style={{
                padding: "10px",
                backgroundColor: "#f2f2f2",
                border: "1px solid #ddd",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {role}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                  onClick={() => handleDeleteRole(role)}
                  style={{
                    marginRight: "10px",
                    padding: "6px 10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
