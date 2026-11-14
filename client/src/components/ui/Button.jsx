import { Link } from "react-router-dom";

const baseStyles =
  "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-white text-black hover:bg-white/85",
  secondary: "border border-white/20 bg-transparent text-white hover:bg-white/10",
};

export default function Button({
  variant = "primary",
  to,
  className = "",
  children,
  ...props
}) {
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  // With a "to" prop the button becomes a link to another page.
  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}