"use client";
import { useEffect } from "react";

const InterstitialAd = () => {
  useEffect(() => {
    console.log("InterstitialAd AdSense Component Mounted");

    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-6035400859853480",
          enable_page_level_ads: true,
        });
        console.log("AdSense Ad Pushed Successfully");
      } catch (error) {
        console.error("AdSense ad failed to load:", error);
      }
    }
  }, []);
  return null;
};

export default InterstitialAd;
