"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/nav";

const ENQUIRY_TYPES = [
  "Weddings",
  "High Tea",
  "Corporate Events",
  "Markets & Expos",
  "Accommodation",
  "General Enquiry",
];

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const enquiryType = String(data.get("enquiryType") ?? "General Enquiry");
    const preferredDate = String(data.get("preferredDate") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `${enquiryType} enquiry - ${name}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Enquiry type: ${enquiryType}`,
      preferredDate && `Preferred date: ${preferredDate}`,
      "",
      message,
    ].filter(Boolean);

    const mailto = `${SITE.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </label>
          <Input id="phone" name="phone" type="tel" placeholder="04xx xxx xxx" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="preferredDate" className="text-sm font-medium text-foreground">
            Preferred date (optional)
          </label>
          <Input id="preferredDate" name="preferredDate" type="date" />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="enquiryType" className="text-sm font-medium text-foreground">
          What&apos;s your enquiry about?
        </label>
        <select
          id="enquiryType"
          name="enquiryType"
          defaultValue="General Enquiry"
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your event, guest count, and anything else that helps us plan."
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Enquiry
      </Button>

      {sent && (
        <p className="text-sm text-muted-foreground">
          Your email app should now be open with this enquiry pre-filled —
          just hit send. If nothing opened, email us directly at{" "}
          <a href={SITE.emailHref} className="text-accent hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      )}
    </form>
  );
}
