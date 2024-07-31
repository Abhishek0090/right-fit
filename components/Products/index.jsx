"use client";
import Filters from "../Filters";
import Pagination from "../Pagination";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import { _get } from "@/lib/apiInstance";
import Skeleton from "../Skeleton";
import { useCart } from "@/provider/CartProvider";
import { getColors, getMaterial, getProducts } from "@/constants/apis";

const itemsPerPage = 6;

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const startItem = (page - 1) * itemsPerPage;
  const endItem = startItem + itemsPerPage;
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const { addProductToCart } = useCart();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);

      const productResponse = await getProducts();
      const products = productResponse || [];

      const [colors, materials] = await Promise.all([
        getColors(),
        getMaterial(),
      ]);
      setColors(colors);
      setMaterials(materials);

      const finalData = products.map((item) => ({
        ...item,
        color: colors.find(({ id }) => id === item?.colorId)?.name || "NA",
        material:
          materials.find(({ id }) => id === item?.materialId)?.name || "NA",
      }));

      setProducts(finalData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <div className="w-[20%]">
        <Filters colors={colors} materials={materials} />
      </div>
      <div className="w-[80%] flex flex-col gap-4 justify-between">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products?.slice(startItem, endItem).map((product, index) => (
                <ProductCard
                  key={index}
                  product={product}
                  onClick={() => addProductToCart(product)}
                />
              ))}
            </div>
            <Pagination
              activePage={page}
              totalPages={totalPages}
              onClick={(value) => setPage(value)}
            />
          </>
        )}
      </div>
    </div>
  );
}
