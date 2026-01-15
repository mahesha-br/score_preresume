import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
    const location=useLocation();
    console.log(location);
     

  return (
    <div className="flex-[0.2] bg-gray-700 text-white h-screen shrink-0">
      
      {/* Logo / Title */}
      <div className="px-7.5 py-5 flex flex-col items-center justify-center">
        <ArticleIcon sx={{ fontSize: 54, marginBottom: 2 }} />
<div className="text-[25px] font-serif whitespace-nowrap">Resume Screening</div>
      </div>

      {/* Menu */}
      <div className="mt-7.5">

        <Link to={'/dashboard'} 
        className={`p-5 flex font-serif items-center gap-2.5 text-[22px] cursor-pointer hover:bg-white/10
  ${location.pathname === "/dashboard" ? "bg-[rgb(72,72,222)]" : ""}
       `}><DashboardIcon sx={{ fontSize: 25,}}/>
          <span>Dashboard</span>
        </Link>

        <Link to={'/history'} className={`p-5 flex font-serif items-center gap-2.5 text-[22px] cursor-pointer hover:bg-white/10
  ${location.pathname === "/history" ? "bg-[rgb(72,72,222)]" : ""}
       `}>
          <ManageSearchIcon sx={{ fontSize: 30,}} />
          <span>History</span>
        </Link>

        <Link to={'/admin'} className={`p-5 flex font-serif items-center gap-2.5 text-[22px] cursor-pointer hover:bg-white/10
  ${location.pathname === "/admin" ? "bg-[rgb(72,72,222)]" : ""}
       `}>
          <AdminPanelSettingsIcon sx={{ fontSize: 25,}} />
          <span>Admin</span>
        </Link>

        <div className="p-5 flex font-serif items-center gap-2.5 text-[22px] cursor-pointer hover:bg-white/10">
          <LogoutIcon sx={{ fontSize: 25,}} />
          <span>Logout</span>
        </div>

      
      </div>
    </div>
  );
};

export default SideBar;
