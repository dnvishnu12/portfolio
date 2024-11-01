import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DN Vishnu",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://e7.pngegg.com/pngimages/471/436/png-clipart-asiatic-peafowl-feather-bird-peacock-feather-peacock-feather-watercolor-painting-painted.png"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
