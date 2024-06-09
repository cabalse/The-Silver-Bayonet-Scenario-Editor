import { createElement } from "react";
import TerrainPiece from "../00-atoms/terrain-piece";

const TerrainPieces = ({ data }) => {
  const createTerrainPiecesElement = (
    id,
    image,
    position,
    rotation,
    width,
    height
  ) => {
    return createElement(TerrainPiece, {
      id: id,
      image: image,
      position: position,
      rotation: rotation,
      width: width,
      height: height,
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
        item.height
      )
    );
  });

  return <>{ret}</>;
};

export default TerrainPieces;
