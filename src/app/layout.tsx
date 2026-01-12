import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-web-two-sooty.vercel.app"),
  title: "Ayrton López | Backend Developer",
  description:
    "Desarrollador Backend — TypeScript · Node.js · NestJS · SQL. Construyo sistemas de negocio: automatización, APIs robustas y dashboards accionables.",
  openGraph: {
    title: "Ayrton López | Backend Developer",
    description:
      "TypeScript · Node.js · NestJS · SQL. Sistemas de negocio: automatización, APIs robustas y dashboards accionables.",
    url: "/",
    siteName: "Portfolio de Ayrton López",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ayrton López - Backend Developer",
      },
    ],
    locale: "es_AR",
    type: "website", 
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayrton López | Backend Developer",
    description:
      "TypeScript · Node.js · NestJS · SQL. Sistemas de negocio: automatización, APIs robustas y dashboards accionables.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
