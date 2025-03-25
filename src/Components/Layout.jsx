import { Outlet, Navigate } from "react-router";
import Sidebar from "./SideBar.jsx";

const Layout = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
