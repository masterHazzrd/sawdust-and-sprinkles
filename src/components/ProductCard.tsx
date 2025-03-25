import React, { ReactNode } from "react";
import Image from "next/image";

interface Product {
  price: ReactNode;
  image: string;
  name: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: ".85rem",
        margin: ".5rem",
        maxWidth: "500px",
      }}
    >
      {/* Wrap Image in a relative container for fill usage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          marginBottom: "1rem",
        }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: "contain", borderRadius: "8px" }}
        />
      </div>
      <h4>{product.price}</h4>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
