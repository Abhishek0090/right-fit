"use client";
import { useEffect } from "react";

const GoogleBannerAd = () => {
  useEffect(() => {
    console.log("AdSense Component Mounted");
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        console.log("Pushing AdSense Ad...");
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        console.log("AdSense Ad Pushed Successfully");
      } catch (e) {
        console.error("AdSense Error:", e);
      }
    } else {
      console.log("AdSense Script Not Loaded Yet");
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
