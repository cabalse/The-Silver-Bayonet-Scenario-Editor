const updateScenarioTerrainPiece = (state, payload) => {
  let terrain = [...state.scenarioData.terrain];
  let terrain_id = terrain.findIndex((tp) => tp.id === payload.id);

  terrain[terrain_id].position.x = Math.floor(payload.x);
  terrain[terrain_id].position.y = Math.floor(payload.y);
  if (payload.rot) terrain[terrain_id].rotation = Math.floor(payload.rot);

  return {
    ...state,
    scenarioData: {
      ...state.scenarioData,
      terrain: terrain,
    },
  };
};

export default updateScenarioTerrainPiece;
