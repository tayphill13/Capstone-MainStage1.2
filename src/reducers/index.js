import formVisibleReducer from "./form-visible-reducer";
import messageListReducer from "./message-list-reducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterTicketList: messageListReducer,
  firestore: firestoreReducer,
});

export default rootReducer;