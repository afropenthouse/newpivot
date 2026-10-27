"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { photos } from "@/lib/company";

export function PhotoGallery() {
  const [filter, setFilter] = useState("All photos");
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const visible = photos.filter((p) => filter === "All photos" || p.category === filter);
  const current = visible[selected];
  return (
    <section className="container-grid section-space">
      <div className="gallery-toolbar">
        <p className="eyebrow">PIVOT IN PICTURES</p>
        <div className="gallery-filters" aria-label="Filter gallery">
          {["All photos", "Our stations", "Our people", "At your service"].map((f) => (
            <button
              key={f}
              aria-pressed={filter === f}
              onClick={() => {
                setFilter(f);
                setSelected(0);
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <div className="photo-grid">
          {visible.map((p, i) => (
            <button
              key={p.src}
              className="photo-tile"
              onClick={() => {
                setSelected(i);
                setOpen(true);
              }}
              aria-label={`View ${p.title}`}
            >
              <div>
                <img src={p.src} alt={p.alt} loading="lazy" />
                <span className="expand-photo">
                  <Expand size={19} />
                </span>
              </div>
              <span className="photo-category">{p.category}</span>
              <h2>{p.title}</h2>
            </button>
          ))}
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className="lightbox-overlay" />
          <Dialog.Content
            className="lightbox-content"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") setSelected((selected + 1) % visible.length);
              if (e.key === "ArrowLeft")
                setSelected((selected - 1 + visible.length) % visible.length);
            }}
          >
            <Dialog.Close className="lightbox-close" aria-label="Close photo">
              <X />
            </Dialog.Close>
            {current && (
              <>
                <img src={current.src} alt={current.alt} />
                <div className="lightbox-caption">
                  <div>
                    <Dialog.Title>{current.title}</Dialog.Title>
                    <Dialog.Description>
                      {current.category} · {selected + 1} / {visible.length}
                    </Dialog.Description>
                  </div>
                  <div>
                    <button
                      aria-label="Previous photo"
                      onClick={() => setSelected((selected - 1 + visible.length) % visible.length)}
                    >
                      <ArrowLeft />
                    </button>
                    <button
                      aria-label="Next photo"
                      onClick={() => setSelected((selected + 1) % visible.length)}
                    >
                      <ArrowRight />
                    </button>
                  </div>
                </div>
              </>
            )}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
