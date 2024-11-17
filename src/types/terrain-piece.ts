type TerrainPiece = {
  id: number;
  name: string;
  image: string;
  position: { x: number; y: number };
  rotation: number;
  width: number;
  height: number;
};

export default TerrainPiece;
