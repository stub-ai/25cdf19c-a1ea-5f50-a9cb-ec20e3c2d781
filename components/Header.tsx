import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-blue-500 text-white">
      <Link href="/">
        <a className="text-2xl font-bold">Online Store</a>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/cart"><a>Cart</a></Link></li>
        </ul>
      </nav>
    </header>
  );
}