import Cart from "@/components/Cart";
import GoogleBannerAd from "@/components/GoogleBanner";
import Hero from "@/components/Hero";
import InterstitialAd from "@/components/Intertitial";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Cart />
      <div className="bg-images">
        <Hero />
      </div>

      <div className="h-[200px]">
        <InterstitialAd />
      </div>
      <Products />
      <br />
      <br />
    </div>
  );
}
