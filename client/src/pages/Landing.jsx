import { Link } from "react-router-dom";
import GlassCard from "../components/ui/GlassCard.jsx";

export default function Landing() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <GlassCard className="flex w-full max-w-md flex-col gap-4 p-8">
        <h1 className="text-4xl font-semibold tracking-tight">SupportFlow</h1>
        <p className="text-muted">Landing page placeholder.</p>
        <Link to="/login" className="text-sm text-white underline-offset-4 hover:underline">
          Go to login
        </Link>
      </GlassCard>
    </div>
  );
}