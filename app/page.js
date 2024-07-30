import Cart from "@/components/Cart";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Cart />
      <div className="bg-images">
        <Header />
        <Hero />
      </div>
      <Products />
      <Footer />
    </div>
  );
}
