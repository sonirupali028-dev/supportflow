import Backdrop from "./components/ui/Backdrop.jsx";

export default function App() {
  return (
    <>
      <Backdrop />

      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="glass glass-hover flex w-full max-w-md flex-col p-8">
          <div className="flex justify-between text-xs text-muted">
            <span>Support platform</span>
            <span className="text-white">SupportFlow</span>
          </div>

          <h1 className="mt-16 text-5xl font-semibold leading-[1.05] tracking-tight">
            Support, made simple.
          </h1>
          <p className="mt-4 text-base text-white/70">
            Manage tickets, teams and customers in one calm dashboard.
          </p>

          <div className="mt-16 flex items-center justify-between">
            <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-lg transition hover:bg-white hover:text-black">
              →
            </button>
            <span className="rounded-full border border-white/25 px-4 py-1.5 text-xs text-white/80">
              Get started
            </span>
          </div>
        </div>
      </div>
    </>
  );
}