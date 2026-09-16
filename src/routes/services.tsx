import { createFileRoute } from "@tanstack/react-router";
import { LegacySite } from "../components/LegacySite";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Urology Services | Dr. Md. Habibur Rahman" },
    { name: "description", content: "Kidney, urinary, infertility, pediatric urology, prostate and bladder care." },
    { property: "og:title", content: "Urology Services | Dr. Md. Habibur Rahman" },
    { property: "og:description", content: "Modern urology and andrology care in Dhaka, Cumilla and online." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: () => <LegacySite page="services" />,
});