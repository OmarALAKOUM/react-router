// import React, { useState } from "react";
// import UsersList from "./Components/UserList";
// import UserForm from "./Components/UserForm";
// import LoginForm from "./Components/LoginForm";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// function App() {
//   const [editingUser, setEditingUser] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isRegistering, setIsRegistering] = useState(false);

//   const handleEdit = (user) => {
//     setEditingUser(user);
//     setShowForm(true);
//   };

//   const handleUserUpdated = () => {
//     setShowForm(false);
//     setEditingUser(null);
//     setIsLoggedIn(false);
//     setIsRegistering(false);
//   };

//   const handleLogin = (user) => {
//     if (user) {
//       console.log("Logged in with:", user);
//       setIsLoggedIn(true);
//     } else {
//       console.error("Login failed. Invalid user or token.");
//     }
//   };

//   const handleRegister = () => {
//     setIsRegistering(true);
//   };

//   const handleCancelRegistration = () => {
//     setIsRegistering(false);
//   };

//   return (
//     <Routes>
//       <Route path = "/" element={<LoginForm />} />
//       <Route path= "/users" element = {<UsersList />} />
//       <Route path = "/Register" element={<UserForm />} />
//     </Routes>
//     // <div>
//     //   {!isLoggedIn ? (

//     //     isRegistering ? (
//     //       <UserForm
//     //         onCancel={handleCancelRegistration}
//     //         onUserUpdated={() => setIsLoggedIn(true)}
//     //       />
//     //     ) : (
//     //       <LoginForm onLogin={handleLogin} onRegister={handleRegister} />
//     //     )
//     //   ) : (

//     //     <>
//     //       {showForm ? (
//     //         <UserForm
//     //           userToEdit={editingUser}
//     //           onCancel={() => setShowForm(false)}
//     //           onUserUpdated={handleUserUpdated}
//     //         />
//     //       ) : (
//     //         <>

//     //           <UsersList onEdit={handleEdit} />
//     //         </>
//     //       )}
//     //     </>
//     //   )}
//     // </div>
//   );
// }

// export default App;
import React from "react";
import UsersList from "./Components/UserList";
import UserForm from "./Components/UserForm";
import LoginForm from "./Components/LoginForm";
import "./LoginForm.css";
import "./index.css";
import { Routes, Route, Navigate } from "react-router";
import NotFound from "./Components/NotFound";
import Sidebar from "./Components/SideBar";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Dashboard";
import Settings from "./Components/Settings";
import { AuthProvider } from "./Context/ContextAPI";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/createUser" element={<UserForm />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="users" element={<UsersList />} />
          <Route path="users/:id" element={<UserForm />} />
          <Route path="register" element={<UserForm />} />
          <Route path="settings" element={<Settings />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
