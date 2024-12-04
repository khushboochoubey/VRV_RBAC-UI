import React from "react";
import "../styles//UserPage.css"; // Custom CSS for styling

function UserPage() {
  return (
    <div className="user-page-container">
      <header className="user-header">
        <img src="asset/user-avatar.png" alt="User Avatar" className="user-avatar" />
        <h1>Welcome, [User Name]</h1>
      </header>
      <main className="user-main">
        {/* Task Performance Section */}
        <section className="performance-section">
          <h2>Task Performance</h2>
          <div className="performance-cards">
            <div className="card">
              <h3>Completed Tasks</h3>
              <p>35</p>
            </div>
            <div className="card">
              <h3>Pending Tasks</h3>
              <p>10</p>
            </div>
            <div className="card">
              <h3>Overall Efficiency</h3>
              <p>87%</p>
            </div>
          </div>
        </section>

        {/* Recent Activity Section */}
        <section className="activity-section">
          <h2>Recent Activity</h2>
          <ul>
            <li>Completed task: "Design a User Dashboard" - 2 hours ago</li>
            <li>Started task: "Fix Sidebar Navigation" - 4 hours ago</li>
            <li>Joined meeting: "Team Discussion" - 1 day ago</li>
          </ul>
        </section>

        {/* Notifications */}
        <section className="notifications-section">
          <h2>Notifications</h2>
          <ul>
            <li>You have 3 new tasks assigned</li>
            <li>Reminder: Submit your weekly report</li>
            <li>New message from the project manager</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default UserPage;
