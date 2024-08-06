import { useRef, useState } from "react";
import { Layer, Stage } from "react-konva";

import TerrainPieces from "./terrain-pieces";
import useAppContext from "../../context/appcontext/useappcontext";

const MapEditor = () => {
  const context = useAppContext();
  const stageRef = useRef(null);

  const [selected, setSelected] = useState(0);

  const onSelect = (id) => {
    setSelected(id);
  };

  const onMove = (id, x, y) => {
    console.log(id, x, y);
  };

  return (
    <Stage ref={stageRef} width={1100} height={800} draggable>
      <Layer>
        <TerrainPieces
          data={context.appState.scenarioData.terrain}
          selected={selected}
          onMove={onMove}
          onSelect={onSelect}
        />
      </Layer>
    </Stage>
  );
};

export default MapEditor;
