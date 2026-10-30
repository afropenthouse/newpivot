import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { offices } from "@/lib/company";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-grid footer-cta">
        <div>
          <p className="eyebrow light">LET'S MOVE FORWARD</p>
          <h2>
            Your next chapter.
            <br />
            Powered by Pivot.
          </h2>
        </div>
        <Link href="/contact" className="action-button">
          Talk to our team <ArrowUpRight size={19} />
        </Link>
      </div>
      <div className="container-grid footer-grid">
        <div>
          <Link href="/">
            <img
              src="/pivot-logo-white.png"
              alt="Pivot Integrated Energy"
              className="footer-logo"
            />
          </Link>
          <p>
            Energy for today, tomorrow
            <br />
            and the future.
          </p>
          <a href="mailto:sales@pivotintegratedenergy.com">sales@pivotintegratedenergy.com</a>
          <a href="tel:+2348167610298">+234 816 761 0298</a>
        </div>
        <div>
          <h3>Explore</h3>
          {[
            ["About us", "/about"],
            ["Our services", "/services"],
            ["Infrastructure", "/assets"],
            ["Gallery", "/gallery"],
            ["Contact us", "/contact"],
          ].map(([label, to]) => (
            <Link key={to} href={to!}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <h3>Visit our head office</h3>
          <p>{offices[0]!.address}</p>
          <Link href="/contact" className="footer-location">
            View all five offices <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="container-grid footer-bottom">
        <span>© {new Date().getFullYear()} Pivot Integrated Energy Services Limited.</span>
        <span>Integrity. Honesty. Impact. Service. Quality.</span>
      </div>
    </footer>
  );
}
