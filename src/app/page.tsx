"use client";

import { useState } from "react";

export default function DesignPage() {
  const [wall, setWall] = useState("wallWhite");
  const [floor, setFloor] = useState("floorWood");
  const [ceiling, setCeiling] = useState("ceilingPlain");

  // Texture class maps
  const textures: any = {
    wallWhite: "bg-white",
    wallBrick: "bg-[url('/textures/brick.jpg')] bg-cover",

    floorWood: "bg-[url('/textures/wood.jpg')] bg-cover",
    floorTile: "bg-[url('/textures/tile.jpg')] bg-cover",

    ceilingPlain: "bg-gray-100",
    ceilingPattern: "bg-[url('/textures/ceiling.jpg')] bg-cover",
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Room Designer</h1>

      {/* Controls */}
      <div className="flex gap-6 mb-8">
        <div>
          <label htmlFor="wallSelect" className="block mb-1">
            Wall Style
          </label>
          <select
            id="wallSelect"
            value={wall}
            onChange={(e) => setWall(e.target.value)}
            className="border p-2"
          >
            <option value="wallWhite">White</option>
            <option value="wallBrick">Brick</option>
          </select>
        </div>

        <div>
          <label htmlFor="floorSelect" className="block mb-1">
            Floor Style
          </label>
          <select
            id="floorSelect"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="border p-2"
          >
            <option value="floorWood">Wood</option>
            <option value="floorTile">Tile</option>
          </select>
        </div>

        <div>
          <label htmlFor="ceilingSelect" className="block mb-1">
            Ceiling Style
          </label>
          <select
            id="ceilingSelect"
            value={ceiling}
            onChange={(e) => setCeiling(e.target.value)}
            className="border p-2"
          >
            <option value="ceilingPlain">Plain</option>
            <option value="ceilingPattern">Pattern</option>
          </select>
        </div>
      </div>

      {/* Room Preview */}
      <div className="w-[400px] h-[400px] border relative overflow-hidden">
        <div className={`absolute top-0 w-full h-1/4 ${textures[ceiling]}`} />
        <div className={`absolute top-1/4 w-full h-2/4 ${textures[wall]}`} />
        <div className={`absolute bottom-0 w-full h-1/4 ${textures[floor]}`} />
      </div>
    </div>
  );
}