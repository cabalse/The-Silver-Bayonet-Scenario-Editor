import { createElement } from "react";
import TerrainPiece from "../00-atoms/terrain-piece";

const TerrainPieces = ({ data, selected, onMove, onSelect, onChange }) => {
  const createTerrainPiecesElement = (
    id,
    image,
    position,
    rotation,
    width,
    height,
    selected,
    onMove,
    onSelect
  ) => {
    return createElement(TerrainPiece, {
      id: id,
      image: image,
      position: position,
      rotation: rotation,
      width: width,
      height: height,
      selected: selected,
      onMove: onMove,
      onSelect: onSelect,
      onChange: onChange,
    });
  };

  const ret = [];

  data.map((item) => {
    ret.push(
      createTerrainPiecesElement(
        item.id,
        item.image,
        item.position,
        item.rotation,
        item.width,
        item.height,
        selected,
        onMove,
        onSelect,
        onChange
      )
    );
  });

  return <>{ret}</>;
};

export default TerrainPieces;
