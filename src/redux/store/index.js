import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favorites";
import jobsReducer from "../reducers/jobs";

const allReducers = combineReducers({
    favorites: favoritesReducer,
    jobs : jobsReducer,
})

const store = configureStore({
    reducer: allReducers
})

export default store