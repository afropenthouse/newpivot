import { mkdir, readFile, writeFile } from "node:fs/promises";
import { pagePaths, legacyRoutes, renderPage } from "../dist-ssr/entry-server.js";

const output = new URL("../dist/", import.meta.url);
const template = await readFile(new URL("index.html", output), "utf8");
const root = '<div id="root"></div>';
if (!template.includes("</head>") || !template.includes(root)) {
  throw new Error("Build output is missing the page head or React root");
}

async function writePage(pathname, destination) {
  const { head, body } = renderPage(pathname);
  const file = new URL(destination, output);
  await mkdir(new URL(".", file), { recursive: true });
  await writeFile(
    file,
    template
      .replace("</head>", () => `${head}\n  </head>`)
      .replace(root, () => `<div id="root">${body}</div>`),
  );
}

for (const path of pagePaths) {
  await writePage(path, path === "/" ? "index.html" : `${path.slice(1)}.html`);
}
await writePage("/404", "404.html");

for (const [from, to] of legacyRoutes) {
  const file = new URL(`${from.slice(1)}.html`, output);
  await mkdir(new URL(".", file), { recursive: true });
  await writeFile(
    file,
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Page moved</title><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${to}"></head><body><a href="${to}">Continue to the new page</a></body></html>`,
  );
}
