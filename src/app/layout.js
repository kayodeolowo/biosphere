import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const AveriaSerifLibre = localFont({
  src: "./fonts/AveriaSerifLibre-Regular.ttf",
  variable: "--font-AveriaSerifLibre-Regular",
  weight: "100 900",
});

export const metadata = {
  title: "Biosphere Solutions",
  description: "Discover the Wonders of Nature's Harmony",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${AveriaSerifLibre.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
