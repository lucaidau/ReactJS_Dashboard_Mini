import React from "react";
import { NavLink } from "react-router-dom";
import {
  Check,
  House,
  FolderClosed,
  ClipboardList,
  CalendarRange,
  Settings,
} from "lucide-react";

const SideBar = () => {
  const menuItems = [
    {
      path: "/dashboard",
      label: "Overview",
      icon: House,
    },
    {
      path: "/projects",
      label: "Projects",
      icon: FolderClosed,
    },
    {
      path: "/tasks",
      label: "Tasks",
      icon: ClipboardList,
    },
    {
      path: "/calendar",
      label: "Calendar",
      icon: CalendarRange,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="flex flex-col w-64 h-full bg-sidebar-bg border-r border-borders-bg">
      <div className="flex gap-3 items-center px-6 py-8">
        <div className="bg-primary-act text-white rounded-md w-6 h-6 flex items-center justify-center shadow-md">
          <Check size={16} strokeWidth={4}></Check>
        </div>
        <NavLink to="/" className="text-xl font-bold text-main-txt">
          Todo
        </NavLink>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive ? "bg-hover-act font-semibold text-primary-act" : "text-sub-txt hover:bg-gray-50 hover:text-main-txt"} `
            }
          >
            <item.icon size={20}></item.icon>
            <span className="text-main-txt text-sm md:text-md lg:text-lg">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
