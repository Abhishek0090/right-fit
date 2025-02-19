"use client";
import { useEffect } from "react";

const GoogleBannerAd = () => {
  useEffect(() => {
    console.log("Google AdSense Component Mounted");

    if (typeof window !== "undefined") {
      if (!window.adsbygoogle) {
        console.log("AdSense script not loaded yet");
        return;
      }

      try {
        console.log("Pushing AdSense Ad...");
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log("AdSense Ad Pushed Successfully");
      } catch (error) {
        console.error("AdSense Error:", error);
      }
    }
  }, []);

  return (
    <div className="flex justify-center items-center my-4">
      <ins
        className="adsbygoogle"
        style={{ display: "inline-block", width: "728px", height: "90px" }}
        data-ad-client="ca-pub-2344013691030339"
        data-ad-slot="6156279036"
      ></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </div>
  );
};

export default GoogleBannerAd;
