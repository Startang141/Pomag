import {
  LayoutDashboard,
  Users,
  FolderKanban,
  ListTodo,
  Timer,
  Clock3,
  ReceiptText,
  Settings,
  BriefcaseBusiness,
  ChevronDown,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const workMenu = [
  {
    name: "Projects",
    path: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: ListTodo,
  },
  {
    name: "Time Tracker",
    path: "/time-tracker",
    icon: Timer,
  },
  {
    name: "Timesheet",
    path: "/timesheet",
    icon: Clock3,
  },
];

const businessMenu = [
  {
    name: "Clients",
    path: "/clients",
    icon: Users,
  },
  {
    name: "Invoices",
    path: "/invoices",
    icon: ReceiptText,
  },
];

function MenuItem({ item }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.path}
      className={({ isActive }) =>
        [
          "flex items-center gap-3 rounded-xl px-3 py-2.5",
          "text-sm font-medium transition-colors",
          isActive
            ? "bg-slate-100 text-slate-950"
            : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
        ].join(" ")
      }
    >
      <Icon size={18} strokeWidth={1.8} />
      <span>{item.name}</span>
    </NavLink>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-white">
      {/* Brand */}
      <div className="flex h-20 items-center gap-3 px-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
          <BriefcaseBusiness size={20} />
        </div>

        <div>
          <h1 className="text-sm font-semibold text-slate-950">
            Freelance Manager
          </h1>

          <p className="text-xs text-slate-400">
            Workspace
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 pb-5">
        <MenuItem
          item={{
            name: "Dashboard",
            path: "/",
            icon: LayoutDashboard,
          }}
        />

        <div className="mt-7">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Work
          </p>

          <div className="space-y-1">
            {workMenu.map((item) => (
              <MenuItem key={item.path} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-7">
          <p className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Business
          </p>

          <div className="space-y-1">
            {businessMenu.map((item) => (
              <MenuItem key={item.path} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-7">
          <MenuItem
            item={{
              name: "Settings",
              path: "/settings",
              icon: Settings,
            }}
          />
        </div>
      </nav>

      {/* User */}
      <div className="border-t border-slate-200 p-4">
        <button className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-slate-50">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
            JD
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-slate-900">
              John Doe
            </p>

            <p className="truncate text-xs text-slate-400">
              Administrator
            </p>
          </div>

          <ChevronDown size={15} className="text-slate-400" />
        </button>
      </div>
    </aside>
  );
}