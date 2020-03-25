import { immutblePush, immutableDelete } from "../util/immutable";

const initState = ["Elemento 1", "Elemento 2", "Element 3", "Elemento 4"];
let newSate = "";

export function listElementsReducer(state = initState, action) {
  switch (action.type) {
    case "ADDLIST":
      newSate = immutblePush(state, action.data);
      return newSate;
    case "DELETELIST":
      newSate = immutableDelete(state, action.data);
      return newSate;
    default:
      return state;
  }
}
