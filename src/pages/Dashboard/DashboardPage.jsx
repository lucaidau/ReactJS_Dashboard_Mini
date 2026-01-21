import React from "react";
import Button from "../../components/common/Button";
import SearchBar from "../../components/common/SearchBar";
import DashboardHeader from "./DashboardHeader";
import ProgressCard from "./ProgressCard";

const DashboardPage = () => {
  const mockData = [
    {
      title: "To Do",
      task: [
        "Design homepage mockup",
        "Design email pressure",
        "Design edit design",
      ],
    },
    {
      title: "In Progress",
      task: ["Write API documentation", "Write logic worksheet"],
    },
    { title: "Done", task: ["Team sync", "Write API documentation"] },
  ];

  return (
    <div className="">
      <DashboardHeader></DashboardHeader>
      <ProgressCard></ProgressCard>
    </div>
  );
};

export default DashboardPage;
