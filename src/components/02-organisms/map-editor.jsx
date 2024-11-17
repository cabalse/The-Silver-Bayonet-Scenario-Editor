import { useEffect, useRef, useState } from "react";
import { Layer, Stage, Image } from "react-konva";
import useImage from "use-image";

import TerrainPieces from "./terrain-pieces";
import useAppContext from "../../context/appcontext/useappcontext";
import { AppReducerActionTypes } from "../../context/appcontext/appstatereducers";

import map from "./../../assets/tsb-background.jpg";

const Map = () => {
  const [image] = useImage(map);
  return <Image image={image} width="1100" height="800" />;
};

const MapEditor = () => {
  const context = useAppContext();
  const stageRef = useRef(null);

  const [selected, setSelected] = useState(0);

  useEffect(() => {
    context.appStateDispatch({
      type: AppReducerActionTypes.REGISTER_MAP,
      payload: stageRef,
    });
  }, [stageRef]);

  const onSelect = (id) => {
    setSelected(id);
    context.appStateDispatch({
      type: AppReducerActionTypes.SELECT_TERRAIN_PIECE,
      payload: id,
    });
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
      context.appStateDispatch({
        type: AppReducerActionTypes.TERRAIN_PIECE_DESELECTED,
      });
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
        <Map />
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
