import Backdrop from "./components/ui/Backdrop.jsx";
import Button from "./components/ui/Button.jsx";

export default function App() {
  return (
    <>
      <Backdrop />

      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="glass flex w-full max-w-md flex-col gap-6 p-8">
          <h1 className="text-3xl font-semibold tracking-tight">Button test</h1>

          <div className="flex flex-wrap gap-3">
            <Button onClick={() => alert("Primary clicked")}>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
          </div>

          <Button className="w-full">Full width</Button>
        </div>
      </div>
    </>
  );
}