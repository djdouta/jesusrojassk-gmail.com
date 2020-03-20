import { createStore, combineReducers } from "redux";
import { countReducer } from "./countReducer";

const reducers = combineReducers({
  count : countReducer
  // Agregar los reducers que creas necesarios
})

export default createStore(reducers)