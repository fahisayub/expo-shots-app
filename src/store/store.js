import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { urlReducer } from "./urlReducer/url.reducer";
import { screenShotReducer } from "./screenShotReducer/screenShot.reducer";



const rootReducer=combineReducers({
    urlReducer:urlReducer,
    screenShotReducer:screenShotReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store =legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))