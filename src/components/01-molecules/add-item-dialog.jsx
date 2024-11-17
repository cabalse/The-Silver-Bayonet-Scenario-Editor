import terrainImages from "../../constants/terrain-images";
import { AppReducerActionTypes } from "../../context/appcontext/appstatereducers";
import useAppContext from "../../context/appcontext/useappcontext";
import DialogLayout from "../03-templates/dialog-layout";

const AddItemDialog = ({ displayDialog, closeDialog }) => {
  const context = useAppContext();

  const handleClickTerrain = (id) => () => {
    const TerrainPiece = terrainImages.find((piece) => piece.id === id);

    context.appStateDispatch({
      type: AppReducerActionTypes.ADD_TERRAIN_PIECE,
      payload: TerrainPiece,
    });

    closeDialog();
  };

  if (displayDialog) {
    return (
      <DialogLayout>
        <div className="flex flex-row flex-wrap items-center">
          {terrainImages.map((piece, index) => (
            <div
              key={index}
              className="m-2 p-2 hover:bg-slate-100"
              onClick={handleClickTerrain(piece.id)}
            >
              <div className="w-10 h-10 flex flex-col justify-center">
                <img className="h-fit w-fit" src={piece.image} />
              </div>
              {piece.name}
            </div>
          ))}
        </div>
      </DialogLayout>
    );
  } else {
    return null;
  }
};

export default AddItemDialog;
