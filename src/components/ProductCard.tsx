import React from "react";
import { Product } from "../types/product";
import { useNavigate } from "react-router";

interface ProductCardProps {
  item: Product;
}

const ProductCard = ({ item }: ProductCardProps) => {
  const nav = useNavigate();
  const showDetail = () => {
    nav(`/detail/${item.id}`);
  };
  return (
    <div className="w-full p-2">
      <div
        className="product-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        onClick={showDetail}
      >
        <img className="w-full" src={item.img} alt={item.title} />
        <div className="p-4">
          <div className="font-semibold">{item.title}</div>
          <div className="text-gray-600">{item.price.toLocaleString()}원</div>
          <div className="flex gap-2 mt-2">
            {item.choice && (
              <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                추천상품
              </div>
            )}
            {item.new && (
              <div className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                신상
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
