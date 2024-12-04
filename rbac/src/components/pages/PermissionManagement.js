import React, { useState } from "react";

const PermissionManagement = () => {
  const [permissions, setPermissions] = useState(["Read", "Write", "Execute"]);
  const [newPermission, setNewPermission] = useState("");
  const [editPermission, setEditPermission] = useState("");
  const [updatedPermission, setUpdatedPermission] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // Add Permission
  const handleAddPermission = () => {
    if (newPermission && !permissions.includes(newPermission)) {
      setPermissions([...permissions, newPermission]);
      setNewPermission("");
    } else {
      alert("Permission already exists or is empty.");
    }
  };

  // Edit Permission
  const handleEditPermission = () => {
    if (
      editPermission &&
      updatedPermission &&
      permissions.includes(editPermission)
    ) {
      setPermissions(
        permissions.map((perm) =>
          perm === editPermission ? updatedPermission : perm
        )
      );
      setEditPermission("");
      setUpdatedPermission("");
      setIsEditing(false);
    } else {
      alert("Invalid permission or permission not found.");
    }
  };

  // Delete Permission
  const handleDeletePermission = (permissionToDelete) => {
    setPermissions(permissions.filter((perm) => perm !== permissionToDelete));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Permission Management</h1>

      {/* Add Permission */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={newPermission}
          onChange={(e) => setNewPermission(e.target.value)}
          placeholder="Add new permission"
          style={{
            padding: "8px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "250px",
          }}
        />
        <button
          onClick={handleAddPermission}
          style={{
            padding: "8px 12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Permission
        </button>
      </div>

      {/* Edit Permission */}
      <div style={{ marginBottom: "20px" }}>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            style={{
              padding: "8px 12px",
              backgroundColor: "#008CBA",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Edit Permission
          </button>
        ) : (
          <div>
            <select
              value={editPermission}
              onChange={(e) => setEditPermission(e.target.value)}
              style={{
                padding: "8px",
                marginRight: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              <option value="">Select permission to edit</option>
              {permissions.map((perm, index) => (
                <option key={index} value={perm}>
                  {perm}
                </option>
              ))}
            </select>
            <input
              type="text"
              value={updatedPermission}
              onChange={(e) => setUpdatedPermission(e.target.value)}
              placeholder="Updated permission name"
              style={{
                padding: "8px",
                marginRight: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "250px",
              }}
            />
            <button
              onClick={handleEditPermission}
              style={{
                padding: "8px 12px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Update Permission
            </button>
          </div>
        )}
      </div>

      {/* List Permissions */}
      <h2>Existing Permissions</h2>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Permission</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{permission}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  onClick={() => handleDeletePermission(permission)}
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "6px 10px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
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

export default PermissionManagement;
