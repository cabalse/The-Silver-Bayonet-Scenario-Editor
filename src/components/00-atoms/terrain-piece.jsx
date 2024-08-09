import { useEffect, useRef } from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import SETTINGS from "../../settings";

const TerrainPiece = (props) => {
  const shapeRef = useRef();
  const trRef = useRef();
  const [image] = useImage(props.image);

  useEffect(() => {
    if (props.id === props.selected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [props.selected]);

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
        stroke={SETTINGS.MARKED_BORDER_COLOR}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          node.scaleX(1);
          node.scaleY(1);
          props.onChange(
            props.id,
            e.target.x(),
            e.target.y(),
            e.target.rotation()
          );
        }}
      />
      {props.id === props.selected && (
        <Transformer
          ref={trRef}
          flipEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (
              newBox.width !== oldBox.width ||
              newBox.height !== oldBox.height
            ) {
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
