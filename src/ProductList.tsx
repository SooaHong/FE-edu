import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function ProductList() {
  const context = useContext(CartContext);

  if (!context) throw new Error("CartProvider 안에서만 사용 가능");

  const { addToCart } = context;

  const products: Product[] = [
    { id: 1, name: '상품 A', price: 100 },
    { id: 2, name: '상품 B', price: 200 },
    { id: 3, name: '상품 C', price: 300 }
  ];

  return (
    <div className="border p-4 rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-4">상품 목록</h2>
        {products.map((product) => (
            <div key={product.id} className="flex justify-between items-center border-b pb-2">
            <p>{product.name} - {product.price.toLocaleString()} 원</p>
            <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
            >카트에 추가</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

