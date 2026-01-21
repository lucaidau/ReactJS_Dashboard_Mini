import React from "react";

const Button = ({
  variant = "primary",
  icon: Icon,
  size = "md",
  children = "Add Task",
  className = "",
  ...props
}) => {
  const variants = {
    primary: "bg-primary-act text-white hover:bg-[#1557B0] border-transparent",
    outline:
      " bg-white text-sub-txt border-borders-bg hover:bg-hover-act border",
    ghost: "bg-transparent border-transparent text-sub-txt hover:bg-hover-act",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 gap-2 ${variants[variant]} ${sizes[size]} ${className} `}
      {...props}
    >
      {Icon && <Icon size={18}></Icon>} {children}
    </button>
  );
};

export default Button;
