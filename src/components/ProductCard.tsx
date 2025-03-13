import React from "react";
import Image from "next/image";

interface Product {
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
        padding: "1rem",
        margin: "1rem",
        maxWidth: "300px",
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
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
      </div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
