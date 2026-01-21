import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({
  placeholder = "Search",
  value,
  onChange,
  className = "",
  containerClass = "w-64",
  ...props
}) => {
  return (
    <div className={`relative ${containerClass}`}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search size={18} className="text-blur-txt"></Search>
      </div>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${className} block w-full pl-10 py-2 border border-borders-bg rounded-lg text-md text-main-txt focus:outline-none focus:ring-2 focus:ring-primary-act/20 focus:border-primary-act transition-all duration-200`}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
