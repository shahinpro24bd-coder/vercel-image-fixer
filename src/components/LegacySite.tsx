import indexHtml from "../legacy/index.html?raw";
import aboutHtml from "../legacy/about.html?raw";
import serviceHtml from "../legacy/service.html?raw";
import galleryHtml from "../legacy/gallery.html?raw";
import contactHtml from "../legacy/contact.html?raw";
import appointmentHtml from "../legacy/appoinment.html?raw";

type SitePage = "home" | "about" | "services" | "gallery" | "contact" | "appointment";

const documents: Record<SitePage, string> = {
  home: indexHtml,
  about: aboutHtml,
  services: serviceHtml,
  gallery: galleryHtml,
  contact: contactHtml,
  appointment: appointmentHtml,
};

function prepareDocument(html: string) {
  const routes: Record<string, string> = {
    "index.html": "/",
    "index2.html": "/",
    "about.html": "/about",
    "about2.html": "/about",
    "service.html": "/services",
    "service2.html": "/services",
    "gallery.html": "/gallery",
    "gallery2.html": "/gallery",
    "contact.html": "/contact",
    "contact2.html": "/contact",
    "appoinment.html": "/appointment",
    "appoinment2.html": "/appointment",
  };

  let prepared = html;
  for (const [file, route] of Object.entries(routes)) {
    prepared = prepared.replaceAll(`href="${file}"`, `href="${route}" target="_top"`);
  }
  return prepared.replace("<head>", '<head><base href="/" target="_top">');
}

export function LegacySite({ page }: { page: SitePage }) {
  return (
    <iframe
      className="block h-screen w-full border-0"
      srcDoc={prepareDocument(documents[page])}
      title="Dr. Md. Habibur Rahman"
    />
  );
}

export type { SitePage };
