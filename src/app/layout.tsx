import type { Metadata } from "next";
import { Playfair_Display, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://countryoforigin.com.au"),
  title: {
    default: "Country of Origin — Australian Seafood Guide",
    template: "%s — Country of Origin",
  },
  description:
    "Compare Australian seafood with imports. Learn about nutritional value, sustainability, and how supporting local fishers powers coastal communities.",
  applicationName: "Country of Origin",
  authors: [{ name: "Country of Origin" }],
  keywords: [
    "Australian seafood",
    "country of origin",
    "sustainable fishing",
    "Australian fisheries",
    "seafood guide",
  ],
  openGraph: {
    type: "website",
    siteName: "Country of Origin",
    locale: "en_AU",
    title: "Country of Origin — Australian Seafood Guide",
    description:
      "Independent, cited guide to Australian seafood: species, areas, industry, comparisons, recipes, and labelling rules.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Country of Origin — Australian Seafood Guide",
    description:
      "Independent, cited guide to Australian seafood. 24 species, 25 comparisons, 86 sources.",
  },
  robots: { index: true, follow: true },
  themeColor: "#0a2540",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
