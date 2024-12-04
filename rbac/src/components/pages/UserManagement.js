import React, { useState } from "react";

const UserManagement = ({ users, setUsers }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [permissions, setPermissions] = useState([]);
  const [status, setStatus] = useState("active");
  const [activeModal, setActiveModal] = useState(null); // Track which modal is active
  const [errorMessage, setErrorMessage] = useState("");

  const availablePermissions = ["Read", "Write", "Delete", "Update"]; // Example permissions

  // Handle Add User
  const addUser = () => {
    if (username && email) {
      const newUser = {
        username,
        email,
        role,
        permissions,
        status,
      };
      setUsers([...users, newUser]);
      closeModal();
    } else {
      setErrorMessage("Username and Email are required!");
    }
  };

  // Handle Edit User
  const editUser = () => {
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = { ...updatedUsers[userIndex], email, role, permissions, status };
      setUsers(updatedUsers);
      closeModal();
    } else {
      setErrorMessage("User does not exist! Please provide a valid username.");
    }
  };

  // Handle Delete User
  const deleteUser = () => {
    const userExists = users.some((user) => user.username === username);
    if (userExists) {
      const updatedUsers = users.filter((user) => user.username !== username);
      setUsers(updatedUsers);
      closeModal();
    } else {
      setErrorMessage("User does not exist! Please enter a valid username.");
    }
  };

  // Handle Permission Change
  const handlePermissionChange = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  // Close Modal
  const closeModal = () => {
    setActiveModal(null); // Hide any active modal
    setUsername("");
    setEmail("");
    setRole("");
    setPermissions([]);
    setStatus("active");
    setErrorMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management</h1>
      <p>Manage users, their roles, and permissions. Below are the options:</p>
      <ul>
        <li>Add new users to the system</li>
        <li>Edit existing user details</li>
        <li>Delete users from the system</li>
      </ul>

      {/* Buttons to trigger modals */}
      <div className="button-group">
        <button onClick={() => setActiveModal("add")}>Add User</button>
        <button onClick={() => setActiveModal("edit")}>Edit User</button>
        <button onClick={() => setActiveModal("delete")}>Delete User</button>
      </div>

        {/* Display Users */}
        <div style={{ marginTop: "20px" }}>
        <h2>Users List</h2>
        {users.length > 0 ? (
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Permissions</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.permissions.join(", ")}</td>
                  <td>{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users available. Please add users to see the list.</p>
        )}
      </div>

      {/* Modal for Add User */}
      {activeModal === "add" && (
        <div className="modal">
          <h3>Add New User</h3>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter user name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div>
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div style={{ display: "flex", justifyContent: "start" }}>
            <label>Permissions</label>
            {availablePermissions.map((permission, index) => (
              <div style={{ display: "flex", alignItems: "center", width: "80px" }} key={index}>
                <input
                  style={{ marginRight: "10px" }}
                  type="checkbox"
                  id={permission}
                  checked={permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                <label>{permission}</label>
              </div>
            ))}
          </div>
          <div>
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <button onClick={addUser}>Add</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      )}

      {/* Modal for Edit User */}
      {activeModal === "edit" && (
        <div className="modal">
          <h3>Edit User</h3>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter user name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div>
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
          <div style={{ display: "flex", justifyContent: "start" }}>
            <label>Permissions</label>
            {availablePermissions.map((permission, index) => (
              <div style={{ display: "flex", alignItems: "center", width: "80px" }} key={index}>
                <input
                  style={{ marginRight: "10px" }}
                  type="checkbox"
                  id={permission}
                  checked={permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                <label>{permission}</label>
              </div>
            ))}
          </div>
          <div>
            <label>Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <button onClick={editUser}>Save Changes</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      )}

      {/* Modal for Delete User */}
      {activeModal === "delete" && (
        <div className="modal">
          <h3>Delete User</h3>
          <div>
            <label>User Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter user name"
            />
          </div>
          <div>
            <button onClick={deleteUser}>Delete</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
};

export default UserManagement;
