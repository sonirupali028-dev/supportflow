import { Link } from "react-router-dom";
import Button from "../components/ui/Button.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";
import Input from "../components/ui/Input.jsx";

export default function Register() {
  // The form does nothing yet. We connect it to the backend in Phase 3.
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <GlassCard className="w-full max-w-md p-8">
        <h1 className="text-3xl font-semibold tracking-tight">Create your account</h1>
        <p className="mt-2 text-sm text-muted">Start managing support in minutes.</p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
          <Input id="name" type="text" label="Full name" placeholder="Jane Doe" />
          <Input id="email" type="email" label="Email" placeholder="you@company.com" />
          <Input id="password" type="password" label="Password" placeholder="••••••••" />

          <Button type="submit" className="mt-2 w-full">
            Create account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Already have an account?{" "}
          <Link to="/login" className="text-white underline-offset-4 hover:underline">
            Log in
          </Link>
        </p>
      </GlassCard>
    </div>
  );
}