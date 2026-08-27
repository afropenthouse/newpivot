import { Counter } from "@/components/site/Counter";

export function StatsSection() {
  return (
    <section className="border-b border-border bg-surface-low">
      <div className="container-grid grid gap-8 py-12 md:grid-cols-3 md:divide-x md:divide-border">
        <Counter value="2017" label="Founded as an indigenous oil and gas company" />
        <div className="md:pl-10">
          <Counter value="9M+" label="Litres of aviation fuel traded" />
        </div>
        <div className="md:pl-10">
          <Counter value="28M" label="Litres of Calabar storage capacity" />
        </div>
      </div>
    </section>
  );
}
