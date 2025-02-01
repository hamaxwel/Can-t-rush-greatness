import React from "react";
import ProductItem from "./ProductItem";

interface Product {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  popularity?: number;
  stock: number;
}

const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div
      id="gridTop"
      className="max-w-screen-2xl flex flex-wrap justify-between items-center gap-y-8 mx-auto mt-12 max-xl:justify-start max-xl:gap-5 px-5 max-[400px]:px-3"
    >
      {products.map((product) => (
        <ProductItem
          key={product.id} 
          id={product.id}
          image={product.image}
          title={product.title}
          category={product.category}
          price={product.price}
          popularity={product.popularity}
          stock={product.stock}
        />
      ))}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(ProductGrid);
