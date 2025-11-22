import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("CartProvider 안에서만 사용 가능");

  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="border p-4 rounded-lg bg-gray-50">
      <h2 className="text-xl font-bold mb-4">내 카트</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">카트에 상품이 없습니다.</p>
      ) : (
        cart.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex justify-between items-center bg-white p-2 rounded border">
              <p>{item.name}</p>
              <div className="flex gap-2 items-center">
                <p className="text-sm text-gray-600">{item.price.toLocaleString()}원</p>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs"
                >삭제</button>
          </div>
          </div>
        ))
      )}
      <div className="mt-4 border-t pt-2 text-right font-bold text-lg">
        총 합계: {totalPrice.toLocaleString()}원
      </div>
    </div>
  );
}

export default Cart;

