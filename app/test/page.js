import InterstitialAd from "@/components/Intertitial";
import React from "react";

const TestPaage = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Welcome to Our Test Page</h1>
      <p style={{ fontSize: "16px", color: "#555", marginBottom: "20px" }}>
        This page demonstrates the integration of Google AdSense interstitial ads. 
        Ads will be displayed below to help support our content.
      </p>

      {/* Ad Section */}
      <div style={{ margin: "20px 0", padding: "10px", border: "1px solid #ddd", borderRadius: "8px", background: "#f9f9f9" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>Sponsored Advertisement</h2>
        <InterstitialAd />
      </div>

      {/* Additional Content */}
      <p style={{ fontSize: "16px", color: "#333", marginTop: "20px" }}>
        Thank you for visiting! We appreciate your support. Stay tuned for more updates.
      </p>
    </div>
  );
};

export default TestPaage
