"use client";

import { useMemo, useEffect, useReducer } from "react";
import { _get } from "@/lib/apiInstance";
import Skeleton from "@/components/Skeleton";
import { useCart } from "@/provider/CartProvider";
import { getColors, getMaterial, getProducts } from "@/utils/apis";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import Filters from "@/components/Filters";
import { useFilter } from "@/provider/FilterProvider";
import { ProductReducer } from "@/constants";

const itemsPerPage = 6;

const initialState = {
  products: [],
  loading: false,
  page: 1,
  colors: [],
  materials: [],
};

export default function Products() {
  const { addProductToCart } = useCart();
  const { filterData } = useFilter();

  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { products, loading, page, colors, materials } = state;
  const totalPages = Math.ceil(products?.length / itemsPerPage);
  const startItem = (page - 1) * itemsPerPage;
  const endItem = startItem + itemsPerPage;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });

      const productResponse = await getProducts();
      const products = productResponse || [];

      const [colors, materials] = await Promise.all([
        getColors(),
        getMaterial(),
      ]);
      dispatch({ type: "SET_COLORS", payload: colors });
      dispatch({ type: "SET_MATERIALS", payload: materials });

      const finalData = products.map((item) => ({
        ...item,
        color: colors.find(({ id }) => id === item?.colorId)?.name || "NA",
        material:
          materials.find(({ id }) => id === item?.materialId)?.name || "NA",
      }));

      dispatch({ type: "SET_PRODUCTS", payload: finalData });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const filteredData = useMemo(() => {
    let filtered = products;

    if (filterData?.color) {
      filtered = filtered.filter((item) => item.color === filterData.color);
    }

    if (filterData?.material) {
      filtered = filtered.filter(
        (item) => item.material === filterData.material
      );
    }

    return filtered;
  }, [filterData, products]);

  const displayedProducts = filteredData.length ? filteredData : products;

  return (
    <div className="flex">
      <div className="w-[20%]">
        <Filters colors={colors} materials={materials} />
      </div>
      <div className="w-[80%] flex flex-col gap-4 pt-8 justify-between">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Skeleton />
          </div>
        ) : (
          <>
            {displayedProducts.length ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {displayedProducts
                    .slice(startItem, endItem)
                    .map((product, index) => (
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
                  onClick={(value) =>
                    dispatch({ type: "SET_PAGE", payload: value })
                  }
                />
              </>
            ) : (
              <div className="text-center py-8">No products available.</div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
