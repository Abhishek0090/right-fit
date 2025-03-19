import Cart from "@/components/Cart";
import EncryptDecrypt from "@/components/Encrypted";
import GoogleBannerAd from "@/components/GoogleBanner";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <EncryptDecrypt />
      {/* <Cart />
      <div className="bg-images">
        <Hero />
      </div>
      <br />
      <div className="h-[200px] w-full">
        <GoogleBannerAd />
      </div>
      <Products />
      <br />
      <br /> */}
    </div>
  );
}
