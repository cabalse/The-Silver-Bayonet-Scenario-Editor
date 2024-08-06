import { describe, expect, it } from "vitest";

import appStateReducer, { AppReducerActionTypes } from "./appstatereducers";
import initialAppState from "./initialappstate";

const baseAppState = initialAppState;

describe("appStateReducer", () => {
  it("Should return the same state for an unknown action type", () => {
    const initialState = { ...baseAppState, age: "home" };

    const action = { type: "UNKNOWN_ACTION_TYPE", payload: "about" };
    const newState = appStateReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it("Should change load dialog state", () => {
    const initialState = { ...baseAppState, displayLoadDialog: false };

    const action = {
      type: AppReducerActionTypes.CHANGE_LOAD_DIALOG_STATE,
      payload: true,
    };
    const newState = appStateReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, displayLoadDialog: true });
  });

  it("Should add disabled menu item", () => {
    const initialState = { ...baseAppState, disabledMenuItems: [] };

    const action = {
      type: AppReducerActionTypes.ADD_DISABLED_MENU_ITEM,
      payload: "item1",
    };
    const newState = appStateReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, disabledMenuItems: ["item1"] });
  });

  it("Should add multiple disabled menu items", () => {
    const initialState = { ...baseAppState, disabledMenuItems: [] };

    const action = {
      type: AppReducerActionTypes.ADD_DISABLED_MENU_ITEM,
      payload: ["item1", "item2"],
    };
    const newState = appStateReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      disabledMenuItems: ["item1", "item2"],
    });
  });

  it("Should remove disabled menu item", () => {
    const initialState = {
      ...baseAppState,
      disabledMenuItems: ["item1", "item2"],
    };

    const action = {
      type: AppReducerActionTypes.REMOVE_DISABLED_MENU_ITEM,
      payload: "item1",
    };
    const newState = appStateReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, disabledMenuItems: ["item2"] });
  });

  it("Should remove multiple disabled menu items", () => {
    const initialState = {
      ...baseAppState,
      disabledMenuItems: ["item1", "item2", "item3"],
    };

    const action = {
      type: AppReducerActionTypes.REMOVE_DISABLED_MENU_ITEM,
      payload: ["item1", "item3"],
    };
    const newState = appStateReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, disabledMenuItems: ["item2"] });
  });

  it("Should set scenario data", () => {
    const initialState = { ...baseAppState, scenarioData: null };

    const action = {
      type: AppReducerActionTypes.SET_SCENARIO_DATA,
      payload: { id: 1, name: "Scenario" },
    };
    const newState = appStateReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      scenarioData: { id: 1, name: "Scenario" },
    });
  });

  it("Should switch page", () => {
    const initialState = { ...baseAppState, page: "home" };

    const action = {
      type: AppReducerActionTypes.SWITCH_PAGE,
      payload: "about",
    };
    const newState = appStateReducer(initialState, action);

    expect(newState).toEqual({ ...initialState, page: "about" });
  });
});
