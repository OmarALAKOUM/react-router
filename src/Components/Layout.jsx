import { Outlet, Navigate } from "react-router";
import Sidebar from "./SideBar.jsx";
import { useContext } from "react";
import { AuthContext } from "../Context/ContextAPI";

const Layout = () => {
  const { isAuthenticated } = useContext(AuthContext);

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
