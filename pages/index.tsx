import { useState } from 'react';
import Product from '../components/Product';
import Cart from '../components/Cart';
import { ProductType } from '../types';

export default function Home() {
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const products: ProductType[] = []; // Fetch products from API

  const handleAddToCart = (product: ProductType) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (product: ProductType) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <div className="mt-8">
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      </div>
    </main>
  );
}