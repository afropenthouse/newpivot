import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container-grid section-space">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>Let's get you back on track.</h1>
      <Link href="/" className="text-link">
        Return to the homepage
      </Link>
    </main>
  );
}
