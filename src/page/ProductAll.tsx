import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/product";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router";
import Loading from "../components/Loading";

const ProductAll = () => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [query] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const getProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const searchQuery = query.get("q") || "";
      console.log(searchQuery);
      const url = `https://my-json-server.typicode.com/Dante0214/shopping/products?q=${searchQuery}`;

      const response = await axios.get(url);
      const data = response.data;
      console.log(data);
      setProductList(data);
      return data;
    } catch (error) {
      setError("상품 정보를 불러오는데 실패했습니다.");
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

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
