import { useRef } from "react";
import { Layer, Stage } from "react-konva";
import TerrainPieces from "./terrain-pieces";

const MapEditor = ({ data }) => {
  const stageRef = useRef(null);

  return (
    <Stage ref={stageRef} width={1100} height={800} draggable>
      <Layer>
        <TerrainPieces data={data} />
      </Layer>
    </Stage>
  );
};

export default MapEditor;
