import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { authenticationReducer } from "features/authentication/authenticationSlice";

const reducer = combineReducers({
    auth: authenticationReducer,
});

const rootReducer = (state, action) => {
    if (action.type === "authentication/resetAuth") return reducer(undefined, action);

    return reducer(state, action);
};

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {},
            immutableCheck: false,
            serializableCheck: false,
        }),
    devTools: process.env.NODE_ENV === "development",
});

export default store;
