import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <header className="p-6">
        <h1 className="text-4xl font-bold">Wander</h1>
        <p className="text-xl">Luxury Vacations</p>
      </header>
      <main className="flex flex-col items-center justify-center p-6">
        <h2 className="text-3xl font-bold mb-4">Find Your Dream Destination</h2>
        <div className="flex items-center bg-white p-2 rounded-full">
          <input
            type="text"
            placeholder="Search destinations..."
            className="p-2 text-black rounded-full outline-none"
          />
          <button className="p-2 bg-blue-500 rounded-full">
            <FaSearch className="text-white" />
          </button>
        </div>
        <Link href="/destinations" className="mt-6 px-6 py-3 bg-white text-blue-500 rounded-full font-bold">
          Explore Destinations
        </Link>
      </main>
    </div>
  );
}