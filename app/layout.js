import { Nunito_Sans } from "next/font/google";
import "./globals.css";

// app/layout.js or app/layout.tsx
import Script from "next/script";

const nuna = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Right Fit",
  description: "An Ecommerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2344013691030339"
          crossOrigin="anonymous"
        /> */}

        <Script
          id="google-adsense-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-2344013691030339",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
