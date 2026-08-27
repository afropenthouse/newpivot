import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function ServiceCard({
  image,
  title,
  body,
  icon: Icon,
}: {
  image: string;
  title: string;
  body: string;
  icon?: LucideIcon;
}) {
  return (
    <article className="group grid overflow-hidden rounded-lg border border-border bg-card shadow-panel md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          width={1280}
          height={900}
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-charcoal/55 to-transparent" />
      </div>
      <div className="p-7">
        <div>
          <span className="inline-flex size-11 items-center justify-center rounded-sm bg-accent text-primary-dark">
            {Icon ? <Icon className="size-5" /> : <ArrowUpRight className="size-5" />}
          </span>
          <h3 className="headline-md mt-5">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{body}</p>
        </div>
      </div>
    </article>
  );
}
