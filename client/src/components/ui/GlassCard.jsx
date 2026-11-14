export default function GlassCard({ className = "", children, ...props }) {
  return (
    <div className={`glass ${className}`} {...props}>
      {children}
    </div>
  );
}
