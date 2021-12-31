import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter"

const reducer = combineReducers({
  counter: counterReducer
})

export const store = createStore(reducer)