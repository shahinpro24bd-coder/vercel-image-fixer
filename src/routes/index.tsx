import { createFileRoute } from "@tanstack/react-router";
import { LegacySite } from "../components/LegacySite";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Md. Habibur Rahman | Urology & Andrology" },
      {
        name: "description",
        content:
          "Dr. Md. Habibur Rahman provides specialist kidney, infertility, azoospermia and pediatric urology care in Dhaka, Cumilla and online.",
      },
      { property: "og:title", content: "Dr. Md. Habibur Rahman | Urology & Andrology" },
      { property: "og:description", content: "Senior urology and andrology specialist in Dhaka, Cumilla and online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <LegacySite page="home" />,
});
