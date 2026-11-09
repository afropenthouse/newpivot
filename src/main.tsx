import { createRoot, hydrateRoot } from "react-dom/client";
import { App, PageMetadata } from "@/App";
import "@/styles.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing app root");

const pathname = window.location.pathname;
if (root.hasChildNodes()) {
  hydrateRoot(root, <App pathname={pathname} />);
} else {
  createRoot(root).render(
    <>
      <PageMetadata pathname={pathname} />
      <App pathname={pathname} />
    </>,
  );
}
