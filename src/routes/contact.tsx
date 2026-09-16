import { createFileRoute } from "@tanstack/react-router";
import { LegacySite } from "../components/LegacySite";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Dr. Md. Habibur Rahman" },
    { name: "description", content: "Contact Dr. Md. Habibur Rahman for appointments in Dhaka, Cumilla or online." },
    { property: "og:title", content: "Contact Dr. Md. Habibur Rahman" },
    { property: "og:description", content: "Call 01717-497858 for appointments and consultation." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacySite page="contact" />,
});