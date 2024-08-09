import { useRef, useState } from "react";
import { Layer, Stage } from "react-konva";

import TerrainPieces from "./terrain-pieces";
import useAppContext from "../../context/appcontext/useappcontext";
import { AppReducerActionTypes } from "../../context/appcontext/appstatereducers";

const MapEditor = () => {
  const context = useAppContext();
  const stageRef = useRef(null);

  const [selected, setSelected] = useState(0);

  const onSelect = (id) => {
    setSelected(id);
  };

  const onMove = (id, x, y) => {
    context.appStateDispatch({
      type: AppReducerActionTypes.UPDATE_SCENARIO_TERRAIN_PIECE,
      payload: { id: id, x: x, y: y },
    });
  };

  const onChange = (id, x, y, rot) => {
    context.appStateDispatch({
      type: AppReducerActionTypes.UPDATE_SCENARIO_TERRAIN_PIECE,
      payload: { id: id, x: x, y: y, rot: rot },
    });
  };

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelected(0);
    }
  };

  return (
    <Stage
      ref={stageRef}
      width={1100}
      height={800}
      onMouseDown={checkDeselect}
      draggable
    >
      <Layer>
        <TerrainPieces
          data={context.appState.scenarioData.terrain}
          selected={selected}
          onMove={onMove}
          onSelect={onSelect}
          onChange={onChange}
        />
      </Layer>
    </Stage>
  );
};

export default MapEditor;
