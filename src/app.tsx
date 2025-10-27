import { FinancialProjectionChart } from "./chart";

function App() {
  return (
    <main className="grid place-content-center gap-y-8 h-dvh w-full">
      <span className="text-2xl">
        Hello, <span className="text-neutral-400">hello,</span>{" "}
        <span className="text-neutral-300">hello, h...</span>
      </span>

      <div className="w-96">
        <FinancialProjectionChart data={[]} />
      </div>
    </main>
  );
}

export default App;
