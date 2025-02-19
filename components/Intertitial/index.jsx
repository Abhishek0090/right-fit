"use client";
import { useEffect, useState } from "react";

const InterstitialAd = () => {
  const [adLoaded, setAdLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-2344013691030339",
          enable_page_level_ads: true,
        });
        setAdLoaded(true);
      } catch (error) {
        console.error("Interstitial Ad failed to load:", error);
      }
    }
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {adLoaded ? (
        <p>Advertisement is loading...</p>
      ) : (
        <p>Waiting for ad...</p>
      )}
    </div>
  );
};

export default InterstitialAd;
