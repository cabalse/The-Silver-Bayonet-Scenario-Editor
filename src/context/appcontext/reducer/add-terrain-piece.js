import SETTINGS from "../../../settings";

const addTerrainPiece = (state, payload) => {
  const newTerrainPiece = {
    id: state.scenarioData.terrain.length + 1,
    name: payload.name,
    image: payload.image,
    position: { x: 0, y: 0 },
    rotation: 0,
    width: payload.width * SETTINGS.TERRAIN_IMAGE_SCALE,
    height: payload.height * SETTINGS.TERRAIN_IMAGE_SCALE,
  };

  const newScenarioData = {
    ...state.scenarioData,
    terrain: [...state.scenarioData.terrain, newTerrainPiece],
  };

  const newState = { ...state, scenarioData: newScenarioData };

  return newState;
};

export default addTerrainPiece;
