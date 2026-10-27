"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function EnquiryForm() {
  const [prepared, setPrepared] = useState(false);
  return (
    <form
      className="enquiry-form"
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const body = `Name: ${d.get("name")}\nCompany: ${d.get("company")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nProduct: ${d.get("product")}\n\n${d.get("message")}`;
        window.location.href = `mailto:sales@pivotintegratedenergy.com?subject=${encodeURIComponent("Website enquiry: " + d.get("product"))}&body=${encodeURIComponent(body)}`;
        setPrepared(true);
      }}
    >
      <h3>How can we help?</h3>
      <div className="form-row">
        <label>
          Full name *<input required name="name" autoComplete="name" />
        </label>
        <label>
          Company
          <input name="company" autoComplete="organization" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email address *<input required name="email" type="email" autoComplete="email" />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        I'm interested in
        <select name="product">
          <option>Petroleum products trading</option>
          <option>Supply & sourcing</option>
          <option>Distribution & logistics</option>
          <option>Storage infrastructure</option>
          <option>General enquiry</option>
        </select>
      </label>
      <label>
        Your requirements *
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Product, estimated volume, delivery location and how we can help…"
        />
      </label>
      <p className="form-note">
        This opens a draft in your email app. Review it and send to complete your enquiry. You can
        attach documents there.
      </p>
      <button className="action-button" type="submit">
        Prepare email enquiry <ArrowUpRight size={18} />
      </button>
      {prepared && (
        <p className="form-status" role="status">
          Your email draft is ready to open. If no email app appears, send your requirements
          directly to sales@pivotintegratedenergy.com.
        </p>
      )}
    </form>
  );
}
