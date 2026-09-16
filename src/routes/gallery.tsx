import { createFileRoute } from "@tanstack/react-router";
import { LegacySite } from "../components/LegacySite";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery | Dr. Md. Habibur Rahman" },
    { name: "description", content: "Clinical and professional gallery of Dr. Md. Habibur Rahman." },
    { property: "og:title", content: "Gallery | Dr. Md. Habibur Rahman" },
    { property: "og:description", content: "Urology care and professional gallery." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacySite page="gallery" />,
});