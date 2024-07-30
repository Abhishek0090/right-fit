import { defaultProduct } from "@/constants";

export default function ProductCard({
  product: { image, name, colorId, materialId, price },
}) {
  return (
    <div className="relative p-4 cursor-pointer group hover:brightness-50">
      <button className="absolute group-hover:block hidden top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 font-bold">
        Add to Cart
      </button>
      <img
        src={image}
        alt="/images/product.svg"
        className="w-full h-fit mb-4"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = defaultProduct;
        }}
      />
      <h2 className="text-xl font-normal">{name}</h2>
      <p className="text-gray-600">
        {colorId} - {materialId}
      </p>
      <p className="text-lg  text-primaryColor">INR: {price}</p>
    </div>
  );
}
