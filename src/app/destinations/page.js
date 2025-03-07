import Link from 'next/link';

const destinations = [
  { id: 1, name: 'Maldives', image: '/images/maldives.jpg' },
  { id: 2, name: 'Santorini', image: '/images/santorini.jpg' },
  { id: 3, name: 'Bali', image: '/images/bali.jpg' },
];

export default function Destinations() {
  return (
    <div className="min-h-screen bg-white text-black">
      <header className="p-6 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Destinations</h1>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link key={destination.id} href={`/destinations/${destination.id}`} className="block bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{destination.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}