"use client";
import { useEffect } from "react";

const GoogleBannerAd = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-2344013691030339"
      data-ad-slot="6156279036"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleBannerAd;
