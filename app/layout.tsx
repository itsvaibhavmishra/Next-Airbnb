import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// components
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

// meta tags
export const metadata: Metadata = {
  title: "Airbnb Clone | by Vaibhaw Mishra using Next.JS",
  description:
    "An Airbnb clone built using Next.JS 14, TailwindCSS and TypeScript, developed by Vaibhaw Mishra. This clone an extensive collections of features with a greate UI/UX",
  keywords:
    "airbnb airbnb_clone clone nextjs next.js next nextjs14 vaibhawmishra vaibhaw mishra typescript tailwindcss javascript",
};

// poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
