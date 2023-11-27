import { ProductType } from '../types';

type Props = {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
};

export default function Product({ product, onAddToCart }: Props) {
  return (
    <div className="border p-4 rounded-lg">
      <h2 className="font-bold text-lg mb-2">{product.name}</h2>
      <p>{product.description}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}