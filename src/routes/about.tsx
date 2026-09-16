import { createFileRoute } from "@tanstack/react-router";
import { LegacySite } from "../components/LegacySite";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Dr. Md. Habibur Rahman" },
    { name: "description", content: "Qualifications and specialist experience of Dr. Md. Habibur Rahman." },
    { property: "og:title", content: "About Dr. Md. Habibur Rahman" },
    { property: "og:description", content: "Senior urology and andrology specialist in Dhaka, Cumilla and online." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacySite page="about" />,
});