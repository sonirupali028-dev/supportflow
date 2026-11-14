import { NavLink } from "react-router-dom";

// Only the dashboard exists for now. We add more links in later phases.
const links = [{ label: "Dashboard", to: "/dashboard" }];

export default function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-white/10 bg-surface/60 p-6 backdrop-blur-xl md:flex">
      <NavLink to="/" className="mb-10 text-lg font-semibold tracking-tight">
        SupportFlow
      </NavLink>

      <nav className="flex flex-col gap-1">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `rounded-xl px-4 py-2.5 text-sm transition-colors duration-200 ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-muted hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}