"use client";

import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import Skeleton from "@/components/Skeleton";
import { getColors, getMaterial, getProducts } from "@/utils/apis";
import { _get } from "@/lib/apiInstance";
import { useCart } from "@/provider/CartProvider";
import { useEffect, useState } from "react";

const itemsPerPage = 6;

export default function FeatureProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const startItem = (page - 1) * itemsPerPage;
  const endItem = startItem + itemsPerPage;

  const { addProductToCart } = useCart();

  useEffect(() => {
    getFeatureData();
  }, []);

  const getFeatureData = async () => {
    try {
      setLoading(true);

      const productResponse = await getProducts();
      const products = productResponse || [];

      const [colors, materials] = await Promise.all([
        getColors(),
        getMaterial(),
      ]);

      const tempData = products.map((item) => ({
        ...item,
        color: colors.find(({ id }) => id === item?.colorId)?.name || "NA",
        material:
          materials.find(({ id }) => id === item?.materialId)?.name || "NA",
      }));

      setProducts(tempData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center pt-20 gap-4 justify-center">
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
  );
}
