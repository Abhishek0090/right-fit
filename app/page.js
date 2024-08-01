import Cart from "@/components/Cart";
import Hero from "@/components/Hero";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Cart />
      <div className="bg-images">
        <Hero />
      </div>
      <Products />
    </div>
  );
}
