import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import Dashboard from "../pages/Dashboard";
import Clients from "../pages/Clients";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import TimeTracker from "../pages/TimeTracker";
import Timesheet from "../pages/Timesheet";
import Invoices from "../pages/Invoices";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "clients",
        element: <Clients />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "time-tracker",
        element: <TimeTracker />,
      },
      {
        path: "timesheet",
        element: <Timesheet />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);