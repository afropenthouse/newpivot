import { renderToStaticMarkup, renderToString } from "react-dom/server";
import { App, PageMetadata } from "@/App";

export { pagePaths } from "@/App";
export { legacyRoutes } from "@/routes";

export function renderPage(pathname: string) {
  return {
    head: renderToStaticMarkup(<PageMetadata pathname={pathname} />),
    body: renderToString(<App pathname={pathname} />),
  };
}
