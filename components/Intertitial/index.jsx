// components/InterstitialAd.js
import { useEffect } from "react";

const InterstitialAd = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: "ca-pub-2344013691030339",
        enable_page_level_ads: true,
      });
    }
  }, []);

  return null;
};

export default InterstitialAd;
