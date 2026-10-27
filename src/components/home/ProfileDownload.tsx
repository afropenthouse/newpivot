import { ArrowDownToLine } from "lucide-react";
import { profileUrl } from "@/lib/company";

export function ProfileDownload() {
  return (
    <section className="profile-callout container-grid">
      <div>
        <p className="eyebrow">THE BIGGER PICTURE</p>
        <h2>Meet Pivot. In more detail.</h2>
        <p>Our business, capabilities and people in the 2026 corporate profile.</p>
      </div>
      <a href={profileUrl} download className="action-button">
        Download profile <ArrowDownToLine size={18} />
      </a>
    </section>
  );
}
