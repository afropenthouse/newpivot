import { ShieldCheck, Warehouse } from "lucide-react";

import { ValueChainItem } from "@/pages";

export function ValueChainSection({ items }: { items: ValueChainItem[] }) {
  return (
    <section className="container-grid py-24">
      <div className="grid gap-5 md:grid-cols-4">
        {items.map((item, index) => (
          <article key={item.title} className="panel p-6">
            <div className="flex items-center justify-between">
              <span className="inline-flex size-11 items-center justify-center rounded-sm bg-charcoal text-primary-container">
                <item.icon className="size-5" />
              </span>
              <span className="font-display text-4xl font-extrabold text-muted">0{index + 1}</span>
            </div>
            <h3 className="mt-6 font-display text-xl font-extrabold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
