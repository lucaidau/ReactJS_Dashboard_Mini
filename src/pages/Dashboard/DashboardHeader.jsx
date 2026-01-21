import React from "react";
import SearchBar from "../../components/common/SearchBar";
import Button from "../../components/common/Button";

const DashboardHeader = () => {
  return (
    <div className="">
      <h1 className=""></h1>
      <div className="">
        <SearchBar></SearchBar>
        <Button variant="primary"></Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
