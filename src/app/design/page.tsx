"use client";

import { useState } from "react";
import RoomPreview from "./RoomPreview";

export default function DesignPage() {
  const [wall, setWall] = useState("wallWhite");
  const [floor, setFloor] = useState("floorWood");
  const [ceiling, setCeiling] = useState("ceilingPlain");

  const textures: any = {
    wallWhite: "bg-white",
    wallBrick: "bg-[url('/textures/brick.jpg')] bg-cover",

    floorWood: "bg-[url('/textures/wood.jpg')] bg-cover",
    floorTile: "bg-[url('/textures/tile.jpg')] bg-cover",

    ceilingPlain: "bg-gray-100",
    ceilingPattern: "bg-[url('/textures/ceiling.jpg')] bg-cover",
  };

  const resetDesign = () => {
    setWall("wallWhite");
    setFloor("floorWood");
    setCeiling("ceilingPlain");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Room Designer</h1>

      {/* Controls */}
      <div className="flex gap-6 mb-6 flex-wrap">
        <div>
          <label className="block mb-1">Wall Style</label>
          <select
            value={wall}
            onChange={(e) => setWall(e.target.value)}
            className="border p-2"
          >
            <option value="wallWhite">White</option>
            <option value="wallBrick">Brick</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Floor Style</label>
          <select
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="border p-2"
          >
            <option value="floorWood">Wood</option>
            <option value="floorTile">Tile</option>
          </select>
        </div>

        <div>
          <label className="block mb-1">Ceiling Style</label>
          <select
            value={ceiling}
            onChange={(e) => setCeiling(e.target.value)}
            className="border p-2"
          >
            <option value="ceilingPlain">Plain</option>
            <option value="ceilingPattern">Pattern</option>
          </select>
        </div>

        <button
          onClick={resetDesign}
          className="border px-3 py-2 rounded hover:bg-gray-100"
        >
          Reset
        </button>
      </div>

      {/* Room Preview Component */}
      <RoomPreview
        wall={wall}
        floor={floor}
        ceiling={ceiling}
        textures={textures}
      />
    </div>
  );
}