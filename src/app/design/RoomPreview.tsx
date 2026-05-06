type Props = {
  wall: string;
  floor: string;
  ceiling: string;
  textures: any;
};

export default function RoomPreview({
  wall,
  floor,
  ceiling,
  textures,
}: Props) {
  return (
    <div className="w-[400px] h-[400px] border relative overflow-hidden shadow-lg">
      <div className={`absolute top-0 w-full h-1/4 ${textures[ceiling]}`} />
      <div className={`absolute top-1/4 w-full h-2/4 ${textures[wall]}`} />
      <div className={`absolute bottom-0 w-full h-1/4 ${textures[floor]}`} />
    </div>
  );
}