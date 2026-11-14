import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1">
        {/* Small-screen top bar: the sidebar is hidden there. */}
        <header className="border-b border-white/10 px-6 py-4 md:hidden">
          <Link to="/" className="text-lg font-semibold tracking-tight">
            SupportFlow
          </Link>
        </header>

        <main className="p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}