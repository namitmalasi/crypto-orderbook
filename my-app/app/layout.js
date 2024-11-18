// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crypto Orderbook",
  description: "Real-time cryptocurrency orderbook with market indicators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
