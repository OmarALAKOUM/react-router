import { useState, useContext } from "react";
import { LogOut, Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { FaHome, FaUsers } from "react-icons/fa";
import { Link } from "react-router";
import logo from "../assets/react-router.svg";
import omar from "../assets/omar.png";
import SearchIcon from "../assets/search.svg";
import Home from "../assets/dashboard.svg";
import Settings from "../assets/settings.svg";
import Users from "../assets/support.svg";
import CreateUser from "../assets/news.svg";
import { AuthContext } from '../Context/ContextAPI';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { profile } = useContext(AuthContext);
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    document.body.classList.toggle("collapsed");
  };
 
  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-top-wrapper">
        <div className="sidebar-top">
          <Link to="/" className="logo_wrapper">
            <img src={logo} alt="Logo" className="logo-small" />
            <span className={`company-name ${isCollapsed ? "hide" : ""}`}>
              React-Router
            </span>
          </Link>
        </div>
        <button className="expand-btn" onClick={toggleSidebar}>
          <ChevronRight size={10} />
        </button>
      </div>

      <div className="search_wrapper">
        <img src={SearchIcon} />
        <input type="search" placeholder="Search..." />
      </div>

      <div className="sidebar-links">
        <ul>
          <li>
            <Link to="/" title="Dashboard" className="tooltip">
              <img src={Home} />
              <span className={`link ${isCollapsed ? "hide" : ""}`}>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link to="/settings" title="Settings" className="tooltip">
            
              <img src={Settings} />
              <span className={`link ${isCollapsed ? "hide" : ""}`}>
                Settings
              </span>
            </Link>
          </li>

          <li>
            <Link to="/users" title="Users" className="tooltip">
              {/* <Users /> */}
              <img src={Users} />
              <span className={`link ${isCollapsed ? "hide" : ""}`}>Users</span>
              {/* <span class="loader"></span> */}
            </Link>
          </li>

          <li>
            <Link to="/register" title="Create User" className="tooltip">
              <img src={CreateUser} />
              <span className={`link ${isCollapsed ? "hide" : ""}`}>
                Create User
              </span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="separator"></div>

      <div className="sidebar_profile">
        <div className="avatar_wrapper">
          <img className="avatar" src={omar} alt="Omar" />
          <div className="online_status"></div>
        </div>

        <div className={`avatar_name ${isCollapsed ? "hide" : ""}`}>
          <div className="user-name">{profile.firstname}</div>
          <div className="email">{profile.email}</div>
        </div>

        <Link to="/login" className={`logout ${isCollapsed ? "hide" : ""}`}>
          <LogOut />
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
