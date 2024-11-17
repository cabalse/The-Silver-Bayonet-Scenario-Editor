const setSelectedPieceOnTop = (state) => {
  console.log(state);

  const selectedPiece = state.scenarioData.terrain.find(
    (piece) => piece.id === state.selectedTerrainPiece
  );

  const newTerrain = state.scenarioData.terrain.filter(
    (piece) => piece.id !== state.selectedTerrainPiece
  );

  const newState = {
    ...state,
    selectedTerrainPiece: null,
    scenarioData: {
      ...state.scenarioData,
      terrain: [...newTerrain, selectedPiece],
    },
  };

  console.log(newState);

  return newState;
};

export default setSelectedPieceOnTop;
