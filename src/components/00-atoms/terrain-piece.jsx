import { useRef } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";

const TerrainPiece = (props) => {
  const shapeRef = useRef();
  const trRef = useRef();
  const [image] = useImage(props.image);

  return (
    <>
      <Image
        image={image}
        key={props.id}
        ref={shapeRef}
        id={props.id + ""}
        x={props.position.x}
        y={props.position.y}
        draggable={props.id === props.selected ? true : false}
        width={props.width}
        height={props.height}
        rotation={props.rotation}
        onClick={() => props.onSelect(props.id)}
        onDragEnd={(e) => props.onMove(props.id, e.target.x(), e.target.y())}
        strokeWidth={props.id === props.selected ? 1 : 0}
        stroke="blue"
      />
      {props.id === props.selected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (Math.abs(newBox.width) < 5 || Math.abs(newBox.height) < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

export default TerrainPiece;
