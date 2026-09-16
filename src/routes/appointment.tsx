import { createFileRoute } from "@tanstack/react-router";
import { LegacySite } from "../components/LegacySite";

export const Route = createFileRoute("/appointment")({
  head: () => ({ meta: [
    { title: "Book Appointment | Dr. Md. Habibur Rahman" },
    { name: "description", content: "Book a urology consultation with Dr. Md. Habibur Rahman." },
    { property: "og:title", content: "Book Appointment | Dr. Md. Habibur Rahman" },
    { property: "og:description", content: "Call or use WhatsApp to arrange a consultation." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacySite page="appointment" />,
});