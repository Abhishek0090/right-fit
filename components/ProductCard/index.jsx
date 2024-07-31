import { defaultProduct } from "@/constants";

export default function ProductCard({
  product: { image, name, color, material, price },
  onClick = () => {},
}) {
  return (
    <div
      className="relative p-4 cursor-pointer group  transition-all ease-in-out 0.3s"
      onClick={onClick}
    >
      <button className="absolute group-hover:block hidden top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold z-50 ">
        Add to Cart
      </button>
      <img
        src={image}
        alt="/images/product.svg"
        className="w-full h-fit mb-4 hover:brightness-50 "
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultProduct;
        }}
      />
      <h2 className="text-xl font-normal">{name}</h2>
      <span className="text-gray-600 uppercase flex gap-2 items-center">
        <p className="font-bold">{color}</p>-<p>{material}</p>
      </span>
      <p className="text-lg text-primaryColor">INR: {price}</p>
    </div>
  );
}
