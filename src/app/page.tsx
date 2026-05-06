import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Room Designer App</h1>

      <div className="flex gap-4">
        <Link className="text-blue-600 underline" href="/design">
          Design Room
        </Link>

        <Link className="text-blue-600 underline" href="/inspiration">
          Inspiration
        </Link>
      </div>
    </div>
  );
}