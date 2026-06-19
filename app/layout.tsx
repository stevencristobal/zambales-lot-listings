import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zambales Lot Listings & Investment Properties",

  description:
    "Discover residential lots, beachfront properties, riverfront properties, farm lots, installment properties, and investment opportunities across Zambales, Pampanga, Tarlac, Nueva Ecija, Pangasinan, Quezon City, and Las Piñas.",

  keywords: [
    "Zambales Lot for Sale",
    "Beachfront Property Zambales",
    "Farm Lot Zambales",
    "Commercial Lot Zambales",
    "Residential Lot",
    "Installment Lot",
    "Investment Property",
    "Property Consultant",
    "Real Estate Zambales",
    "Lot for Sale Philippines",
    "Steven Cristobal",
  ],

  authors: [
    {
      name: "Steven Cristobal",
    },
  ],

  creator: "Steven Cristobal",

  openGraph: {
    title: "Zambales Lot Listings & Investment Properties",
    description:
      "Explore residential lots, beachfront properties, farm lots, installment properties, and investment opportunities across Luzon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
