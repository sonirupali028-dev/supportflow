import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import Input from "../components/ui/Input.jsx";

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <GlassCard className="flex w-full max-w-md flex-col gap-5 p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Welcome back</h1>

        <Input id="email" type="email" label="Email" placeholder="you@company.com" />
        <Input id="password" type="password" label="Password" placeholder="••••••••" />

        <Button className="mt-2 w-full">Log in</Button>
                <p className="text-center text-sm text-muted">
          No account?{" "}
          <Link to="/register" className="text-white underline-offset-4 hover:underline">
            Register
          </Link>
        </p>
        <Link to="/" className="text-center text-sm text-muted hover:text-white">
          Back to home
        </Link>
      </GlassCard>
    </div>
  );
}