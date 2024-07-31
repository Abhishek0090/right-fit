import { _get } from "@/lib/apiInstance";

export const getProducts = async () => {
  try {
    const response = await _get("products");
    return response?.products || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getColors = async () => {
  try {
    const response = await _get("colors");
    return response?.colors || [];
  } catch (error) {
    console.error("Error fetching colors:", error);
    return [];
  }
};

export const getMaterial = async () => {
  try {
    const response = await _get("material");
    return response?.material || [];
  } catch (error) {
    console.error("Error fetching materials:", error);
    return [];
  }
};
