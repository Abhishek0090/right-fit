"use client";
import { useEffect } from "react";

const InterstitialAd = () => {
  useEffect(() => {
    console.log("InterstitialAd AdSense Component Mounted");

    if (typeof window !== "undefined") {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log("AdSense Ad Pushed Successfully");
      } catch (error) {
        console.error("AdSense ad failed to load:", error);
      }
    }
  }, []);

  return (
    <div className="">
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          // textAlign: "center",
          // width: "1280px",
          // height: "90px",
        }}
        data-ad-layout="in-article"
        // data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-format="fluid"
        data-ad-client="ca-pub-2344013691030339"
        data-ad-slot="3515773446"
      ></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </div>
  );
};

export default InterstitialAd;
