import Navbar from "../components/layout/Navbar.jsx";
import Button from "../components/ui/Button.jsx";
import GlassCard from "../components/ui/GlassCard.jsx";

const features = [
  {
    title: "Unified inbox",
    text: "Every customer conversation in one calm, focused place.",
  },
  {
    title: "Team workflow",
    text: "Assign tickets, track status and keep everyone aligned.",
  },
  {
    title: "AI assistance",
    text: "Smart summaries and suggested replies to respond faster.",
  },
];

export default function Landing() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6">
        <section className="py-28 text-center">
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Customer support, made simple.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            SupportFlow helps teams manage tickets, conversations and customers
            from one clean dashboard.
          </p>
          <div className="mt-10 flex justify-center gap-3">
            <Button to="/login">Get started</Button>
            <Button to="/login" variant="secondary">
              Log in
            </Button>
          </div>
        </section>

        <section className="grid gap-4 pb-24 md:grid-cols-3">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="p-6">
              <h3 className="font-medium">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.text}</p>
            </GlassCard>
          ))}
        </section>
      </main>
    </>
  );
}