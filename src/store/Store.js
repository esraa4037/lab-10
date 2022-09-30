import { createStore } from "redux";
import languageReducer from "./Reducer";

const store = createStore(languageReducer);

export default store;
