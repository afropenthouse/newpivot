import HomePage, { metadata as home } from "@/app/page";
import AboutPage, { metadata as about } from "@/app/about/page";
import AssetsPage, { metadata as assets } from "@/app/assets/page";
import ContactPage, { metadata as contact } from "@/app/contact/page";
import GalleryPage, { metadata as gallery } from "@/app/gallery/page";
import ServicesPage, { metadata as services } from "@/app/services/page";
import NotFound from "@/app/not-found";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { legacyRoutes } from "@/routes";

const routes = new Map([
  ["/", { Page: HomePage, ...home }],
  ["/about", { Page: AboutPage, ...about }],
  ["/assets", { Page: AssetsPage, ...assets }],
  ["/contact", { Page: ContactPage, ...contact }],
  ["/gallery", { Page: GalleryPage, ...gallery }],
  ["/services", { Page: ServicesPage, ...services }],
]);

export const pagePaths = [...routes.keys()];

function resolvePath(pathname: string) {
  const clean = pathname.replace(/\/+$/, "").replace(/\.html$/, "");
  const path = clean === "/index" ? "/" : clean || "/";
  return legacyRoutes.get(path) ?? path;
}

export function PageMetadata({ pathname }: { pathname: string }) {
  const path = resolvePath(pathname);
  const page = routes.get(path);
  const title = `${page?.title ?? "Page not found"} | Pivot Integrated Energy`;
  const description = page?.description ?? "Explore the Pivot Integrated Energy website.";
  const image = "https://pivotintegratedenergy.com/new_pictures/home.jpeg";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Pivot Integrated Energy Services Limited" />
      {page ? (
        <link rel="canonical" href={`https://pivotintegratedenergy.com${path}`} />
      ) : (
        <meta name="robots" content="noindex" />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pivot Integrated Energy" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Pivot Energy retail station" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}

export function App({ pathname }: { pathname: string }) {
  const path = resolvePath(pathname);
  const Page = routes.get(path)?.Page ?? NotFound;

  return (
    <>
      <SiteHeader pathname={path} />
      <div id="main-content">
        <Page />
      </div>
      <SiteFooter />
    </>
  );
}
