import { Image } from "react-konva";
import useImage from "use-image";

const TerrainPiece = (props) => {
  const [image] = useImage(props.image);

  return (
    <>
      <Image
        image={image}
        key={props.id}
        id={props.id + ""}
        x={props.position.x}
        y={props.position.y}
        draggable
        width={props.width}
        height={props.height}
        rotation={props.rotation}
      />
    </>
  );
};

export default TerrainPiece;
