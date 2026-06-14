import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.myfeetni.co.uk"),
  title: {
    default: "My Feet Podiatry | Expert Podiatrist in Ballymena",
    template: "%s | My Feet Podiatry",
  },
  description:
    "Premium foot health and movement clinic in Ballymena, helping you move comfortably, stay active and enjoy life with healthy feet.",
  openGraph: {
    title: "My Feet Podiatry | Expert Podiatrist in Ballymena",
    description:
      "Expert foot and lower limb care in Ballymena, designed around comfort, confidence and movement.",
    url: "https://www.myfeetni.co.uk",
    siteName: "My Feet Podiatry",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
