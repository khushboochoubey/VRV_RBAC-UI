# **RBAC (Role-Based Access Control) Management System**

A React-based Role-Based Access Control (RBAC) system to manage users, roles, and permissions efficiently. This application provides a dashboard to view user information and functionality to add, remove, and edit users, roles, and permissions.

---

## **Features**
- HomePage
- AboutPage
- LoginPage
      ├── As User           
      └── As Admin   

## Features in AdminPage

### **Dashboard**
- Displays user information, including roles and permissions.

### **User Management**
- Add, remove, and edit user details.

### **Role Management**
- Add, remove, and modify roles.

### **Permission Management**
- Add, remove, and edit permissions assigned to roles.

---

## **Technologies Used**

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Styling**: Custom CSS


---

## **Folder Structure**

```
RBAC/
│
├── public/
│   └── asset/               # Contains assets   
│       └── index.html       # Entry point for React
│
├── src/
│   ├── components/          # Reusable React components
│   │   |── pages/           # Main pages of the application           
│   │   |    ├── PermissionManagement.js # Manage permissions
|   |   |    ├── RoleManagement.js       # Manage roles
│   │   |    └── UserManagement.js       # Manage users
│   │   |               
│   │   ├── AdminPage.js      # Manage adminpage
│   │   ├── Dashboard.js      # Dashboard to display user info
│   │   ├── UserPage.js       # for users
│   │   ├── UserCard.js       # Display user details
│   │   └── UserForm.js       # Form for adding/editing users
│   │
│   ├── styles/              # Styling for the application
│   │   ├── index.css        # Global CSS styles
│   │   ├── AdminPage.css    # CSS for AdminPage
│   │   └── UserPage.css     # CSS for UserPage
│   │     
│   ├── App.js               # Main application file
│   ├── index.js             # React entry point
│
└── README.md                # Project README file
```

---

## **Setup and Installation**

Follow these steps to run the project locally or deploy it.

### **Local Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/khushboochoubey/VRV_RBAC-UI
   ```
2. Navigate to the project directory:
   ```bash
   cd rbac
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000`.

---

## **Usage Instructions**

### **Dashboard**
- View a list of users along with their roles and permissions.

### **User Management**
1. Navigate to the **User Management** section.
2. Add new users by filling out the **User Form**.
3. Edit or delete users as needed.

### **Role Management**
1. Go to the **Role Management** section.
2. Add or edit roles for the application.

### **Permission Management**
1. Access the **Permission Management** section.
2. Assign permissions to roles or edit existing permissions.

---



## **Contact**
For any inquiries or feedback:  
- **Email**: [khushboochoubey15@gmail.com]  
- **GitHub**: [https://github.com/khushboochoubey/VRV_RBAC-UI]
