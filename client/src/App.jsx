export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="glass glass-hover w-full max-w-sm p-8">
        <h1 className="text-shine text-3xl font-semibold tracking-tight">
          SupportFlow
        </h1>
        <p className="mt-2 text-sm text-muted">Design system is working.</p>

        <div className="mt-6 flex gap-3">
          <button className="rounded-xl bg-linear-to-b from-white to-neutral-300 px-5 py-2.5 text-sm font-medium text-black shadow-[inset_0_1px_0_rgb(255_255_255),0_4px_16px_rgb(255_255_255/0.1)] transition hover:brightness-95">
            Primary
          </button>
          <button className="rounded-xl border border-white/20 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
}