"use client";
import { useEffect } from "react";

const InterstitialAd = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense ad failed to load:", error);
      }
    }
  }, []);

  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6035400859853480"
        data-ad-slot="8761690256"
      ></ins>
    </div>
  );
};

export default InterstitialAd;
