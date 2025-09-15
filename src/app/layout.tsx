// src/app/layout.tsx

import './globals.css';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ClarityScript from '@/components/ClarityScript';

export const metadata = {
  title: 'Sortbrands - Digital Creative Agency',
  description: 'We help top brands thrive with creative marketing solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Gradient heading
              console.log(
                "%cSYSTEM NOTICE",
                "font-size:18px; font-weight:bold; padding:6px 12px; background: linear-gradient(90deg,#22c55e,#3b82f6,#a855f7,#ef4444); -webkit-background-clip:text; color:transparent;"
              );

              // ASCII Banner "CHACHA"
              console.log("%c" +
"       _                _            \\n" +
"   ___| |__   __ _  ___| |__   __ _  \\n" +
"  / __| '_ \\\\ / _\` |/ __| '_ \\\\ / _\` | \\n" +
" | (__| | | | (_| | (__| | | | (_| | \\n" +
"  \\\\___|_| |_|\\\\__,_|\\\\___|_| |_|\\\\__,_| \\n" +
"                                     \\n",
"color:#22c55e; font-size:12px; font-family:monospace; font-weight:bold;");

              // Fetch IP and run fake warning
              (async () => {
                try {
                  const res = await fetch("https://api.ipify.org?format=json");
                  const data = await res.json();
                  const ip = data.ip || "UNKNOWN";

                  console.log("%cYOU ARE CURRENTLY TRYING TO ACCESS A PROTECTED SYSTEM", "color:#dc2626; font-size:16px; font-weight:bold; background:black; padding:4px;");
                  console.log("%cHUH... YOU THINK THIS IS A JOKE?", "color:#facc15; font-size:15px; font-weight:bold; background:black; padding:4px;");
                  console.log("%cHERE IS YOUR IP: " + ip, "color:#22c55e; font-size:18px; font-weight:bold; background:black; padding:6px;");

                  setTimeout(() => {
                    console.log("%cJUST KIDDING — I almost got you there!!", "color:#3b82f6; font-size:14px; font-weight:bold; font-style:italic;");
                    console.log("%cWanna talk dev?", "color:#a855f7; font-size:13px; font-weight:bold;");
                    console.log("%chttps://api.whatsapp.com/send/?phone=254796280700", "color:#16a34a; font-size:14px; font-weight:bold; text-decoration:underline;");
                  }, 3000);
                } catch (e) {
                  console.log("%cUnable to fetch IP address", "color:#ef4444; font-size:12px;");
                }
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <ClarityScript />
      </head>
      <body className="font-[Poppins]">
        <TopBanner />
        <Header />
        <main>{children}</main>
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}