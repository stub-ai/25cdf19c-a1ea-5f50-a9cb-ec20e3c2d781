import Link from 'next/link';
import { ProductType } from '../types';

type Props = {
  cartItems: ProductType[];
  onRemoveFromCart: (product: ProductType) => void;
};

export default function Cart({ cartItems, onRemoveFromCart }: Props) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="font-bold text-lg mb-2">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => onRemoveFromCart(item)}>Remove</button>
        </div>
      ))}
      <Link href="/checkout">
        <a className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Proceed to Checkout</a>
      </Link>
    </div>
  );
}