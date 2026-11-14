export default function Input({ label, id, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={id} className="text-sm text-muted">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/30 transition-colors duration-200 focus:border-white/30 focus:outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
