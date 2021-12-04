import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";


export const rooReducer = combineReducers({

})

export type RootStateType = ReturnType<typeof rooReducer>
export const store = createStore(rooReducer, applyMiddleware(thunk))


