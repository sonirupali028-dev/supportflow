// Soft grey light shapes that sit behind the page.
// The glass cards blur these shapes, which is what makes them look like glass.
export default function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Large arc in the top-right corner */}
      <div
        className="absolute -right-[260px] -top-[320px] h-[900px] w-[900px] rounded-full border border-white/10"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, rgb(255 255 255 / 0.1), transparent 60%)",
        }}
      />
      {/* Second arc in the bottom-left corner */}
      <div
        className="absolute -bottom-[380px] -left-[260px] h-[800px] w-[800px] rounded-full border border-white/10"
        style={{
          background:
            "radial-gradient(circle at 70% 25%, rgb(255 255 255 / 0.07), transparent 60%)",
        }}
      />

      {/* Soft blurred light blobs */}
      <div className="absolute left-[32%] top-[30%] h-80 w-80 rounded-full bg-white/25 blur-3xl" />
      <div className="absolute bottom-[22%] right-[20%] h-64 w-64 rounded-full bg-white/[0.06] blur-3xl" />
    </div>
  );
}
