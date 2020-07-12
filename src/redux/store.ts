import dataReducer from "./dataReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkMiddleware} from "redux-thunk";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    timelineData: dataReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<RootState, any>));

export default store;

// @ts-ignore
window.store = store





