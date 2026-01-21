import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PlusIcon } from "lucide-react";

import Button from "./components/common/Button";

import Layout from "./components/layout/Layout";
import NavBar from "./components/layout/NavBar";
import SideBar from "./components/layout/SideBar";

import DashboardPage from "./pages/Dashboard/DashboardPage";
import ProjectPage from "./pages/Projects/ProjectPage";
import TaskPage from "./pages/Tasks/TaskPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to="/dashboard" replace></Navigate>}
          ></Route>

          <Route
            path="/dashboard"
            element={<DashboardPage></DashboardPage>}
          ></Route>
          <Route path="/projects" element={<ProjectPage></ProjectPage>}></Route>
          <Route path="/tasks" element={<TaskPage></TaskPage>}></Route>
        </Route>
        <Route
          path="*"
          element={
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold text-gray-800">
                404 - Page Not Found
              </h2>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
