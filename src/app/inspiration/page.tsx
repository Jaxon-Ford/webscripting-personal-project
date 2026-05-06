"use client";

import { useEffect, useState } from "react";

export default function InspirationPage() {
  const [walls, setWalls] = useState<any[]>([]);
  const [floors, setFloors] = useState<any[]>([]);
  const [ceilings, setCeilings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/images");
      const data = await res.json();

      setWalls(data.walls);
      setFloors(data.floors);
      setCeilings(data.ceilings);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="p-10 space-y-10">
      <h1 className="text-3xl font-bold">Room Inspiration</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* WALLS */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Wall Ideas</h2>
            <div className="grid grid-cols-3 gap-3">
              {walls.map((img) => (
                <img key={img.id} src={img.src.medium} className="rounded" />
              ))}
            </div>
          </div>

          {/* FLOORS */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Floor Ideas</h2>
            <div className="grid grid-cols-3 gap-3">
              {floors.map((img) => (
                <img key={img.id} src={img.src.medium} className="rounded" />
              ))}
            </div>
          </div>

          {/* CEILINGS */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Ceiling Ideas</h2>
            <div className="grid grid-cols-3 gap-3">
              {ceilings.map((img) => (
                <img key={img.id} src={img.src.medium} className="rounded" />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}