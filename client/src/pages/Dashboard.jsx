import DashboardLayout from "../components/layout/DashboardLayout.jsx";
import PageHeader from "../components/layout/PageHeader.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";

const stats = ["Open tickets", "Resolved today", "Avg. response time"];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <PageHeader title="Dashboard" description="Overview of your support activity." />

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((label) => (
          <GlassCard key={label} className="p-6">
            <p className="text-sm text-muted">{label}</p>
            <p className="mt-2 text-3xl font-semibold">—</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="mt-4 p-6">
        <p className="text-sm text-muted">Recent tickets</p>
        <p className="mt-2 text-white/70">Nothing here yet.</p>
      </GlassCard>
    </DashboardLayout>
  );
}