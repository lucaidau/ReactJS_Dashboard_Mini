import React from "react";
import SearchBar from "../../components/common/SearchBar";
import Button from "../../components/common/Button";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-bold text-main-txt">My Tasks</h1>
      <div className="flex gap-2 items-center">
        <SearchBar></SearchBar>
        <Button variant="primary"></Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
