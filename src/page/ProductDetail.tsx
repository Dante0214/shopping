import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Product } from "../types/product";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getProductDetail = async () => {
    try {
      setLoading(true);
      setError(null);
      const url = `https://my-json-server.typicode.com/Dante0214/shopping//products/${id}`;
      const response = await axios.get(url);
      setProductDetail(response.data);
    } catch (error) {
      setError("상품 정보를 불러오는데 실패했습니다.");
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  if (!productDetail) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500">상품을 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={productDetail.img}
            alt={productDetail.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6 ">
          <h1 className="text-3xl font-bold text-gray-900">
            {productDetail.title}
          </h1>

          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">(100개 리뷰)</span>
          </div>

          <div className="text-3xl font-bold text-blue-600">
            ₩{productDetail.price.toLocaleString()}
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
              장바구니 담기
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition duration-300 cursor-pointer">
              바로 구매
            </button>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                />
              </svg>
              <span>무료 배송</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
