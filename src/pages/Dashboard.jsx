export default function Dashboard() {
    {
        console.log("INI DASHBOARDDD")
    }
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Overview of your freelance workspace.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active Projects" value="8" />
        <StatCard label="Hours Today" value="5h 42m" />
        <StatCard label="Unbilled Hours" value="18h 30m" />
        <StatCard label="Unpaid Invoices" value="Rp12.5M" />
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="font-semibold text-slate-900">
          Recent Activity
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Time tracking activity will appear here.
        </p>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-slate-500">
        {label}
      </p>

      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
        {value}
      </p>
    </div>
  );
}