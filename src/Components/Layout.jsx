import { Outlet, Navigate } from "react-router";
import Sidebar from './SideBar.jsx'

const Layout = () => {
  const isAuthenticated = !!localStorage.getItem("token"); 

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="layout" style={{display:'flex'}}>
      <Sidebar />
      <div className="content" style={{flex:'1',padding:'16px'}}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
