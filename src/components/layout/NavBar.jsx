import React from "react";

import { Bell, ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <header className="h-16 w-full bg-sidebar-bg border-b border-borders-bg flex items-center justify-end px-8 gap-6">
      <div className="relative cursor-pointer text-blur-txt hover:text-sub-txt transition-colors">
        <Bell size={22}></Bell>
        <span className="absolute top-0 right-0 block bg-red-500 rounded-full border-2 border-white h-2.5 w-2.5"></span>
      </div>
      <div className="flex items-center gap-2 border-l pl-6 border-gray-100">
        <div className="w-8  h-8 rounded-full object-cover bg-gray-200 overflow-hidden border border-borders-bg">
          <img
            src=""
            alt="user's avatar"
            className="cursor-pointer w-full h-full object-cover"
          />
        </div>
        <ChevronDown
          size={16}
          className="text-blur-txt cursor-pointer "
        ></ChevronDown>
      </div>
    </header>
  );
};

export default NavBar;
