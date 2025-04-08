import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router";

const ProductAll = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [query] = useSearchParams();
  const getProducts = async () => {
    try {
      const searchQuery = query.get("q") || "";
      console.log(searchQuery);
      const url = `https://my-json-server.typicode.com/Dante0214/shopping/products?q=${searchQuery}`;

      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setProductList(data);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
