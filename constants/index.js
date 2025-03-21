export const products = [
  {
    id: 1,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 2,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 3,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 4,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 5,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 6,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 7,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 8,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 9,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 10,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 11,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 12,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 13,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 14,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 15,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 16,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 17,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 18,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
  {
    id: 19,
    title: "Autumn Flower Top",
    color: "Black",
    material: "Cotton",
    image: "/images/product.svg",
    price: "1499.00",
  },
];

export const navLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "All Products",
    link: "/",
  },
  {
    id: 3,
    title: "Featured Products",
    link: "/",
  },
  {
    id: 4,
    title: "Contact",
    link: "/",
  },
  {
    id: 5,
    title: "About Us",
    link: "/",
  },
];

export const filterTypes = [
  {
    id: 1,
    title: "Materials",
    types: ["Cotton", "Cotton", "Cotton", "Cotton"],
  },
  {
    id: 2,
    title: "Color",
    types: ["Mint Green", "Blue", "Red"],
  },
];

export const defaultProduct = "/images/product.svg";

export const ACTIONS = {
  products: "SET_PRODUCTS",
  loading: "SET_LOADING",
  page: "SET_PAGE",
  colors: "SET_COLORS",
  materials: "SET_MATERIALS",
};

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.products:
      return { ...state, products: action.payload };
    case ACTIONS.loading:
      return { ...state, loading: action.payload };
    case ACTIONS.page:
      return { ...state, page: action.payload };
    case ACTIONS.colors:
      return { ...state, colors: action.payload };
    case ACTIONS.materials:
      return { ...state, materials: action.payload };
    default:
      return state;
  }
};
