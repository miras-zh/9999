const { createStore } = require("redux");
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let reducers = combineReducers({
    profileReducer:profileReducer,
    messageReducer:messageReducer
})

let store = createStore(reducers);

export default store;