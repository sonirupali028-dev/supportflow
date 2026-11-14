import { Link } from "react-router-dom";
import Button from "../ui/Button.jsx";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-base/60 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-semibold tracking-tight">
          SupportFlow
        </Link>

        <div className="flex items-center gap-3">
          <Button to="/login" variant="secondary" className="px-4 py-2">
            Log in
          </Button>
          <Button to="/register" className="px-4 py-2">
            Get started
          </Button>
        </div>
      </nav>
    </header>
  );
}