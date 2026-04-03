import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SchemaOrg from "@/components/SchemaOrg";
import { organizationSchema } from "@/lib/schema";

const eiko = localFont({
  src: [
    { path: "../public/fonts/PPEiko-Medium.otf", weight: "500", style: "normal" },
    { path: "../public/fonts/PPEiko-Heavy.otf", weight: "800", style: "normal" },
    { path: "../public/fonts/PPEiko-BlackItalic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-eiko",
  display: "swap",
});

const diatype = localFont({
  src: [
    { path: "../public/fonts/ABCDiatypeVariable-Trial.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-diatype",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AgencyFlo — AI-native operating system for agencies",
    template: "%s | AgencyFlo",
  },
  description:
    "AgencyFlo replaces fragmented agency tools with one AI-native platform — managing projects, resources, finances, and clients in a single system.",
  metadataBase: new URL("https://agencyflo.ai"),
  openGraph: {
    siteName: "AgencyFlo",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${eiko.variable} ${diatype.variable}`}>
      <head>
        <SchemaOrg data={organizationSchema()} />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
