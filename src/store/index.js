import { createStore, combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { listElementsReducer } from "./listElementsReducer";

const reducers = combineReducers({
  count: countReducer,
  list: listElementsReducer
  // Agregar los reducers que creas necesarios
});

export default createStore(reducers);
