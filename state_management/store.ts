import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { appSlice, authSlice } from "./slices";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["authSlice", "appSlice"],
};

const rootReducer = combineReducers({
    authSlice: authSlice.reducer,
    appSlice: appSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ["persist/PERSIST"],
                // Ignore these field paths in all actions
                ignoredActionPaths: ["meta.arg", "payload.timestamp"],
                // Ignore these paths in the state
                ignoredPaths: ["items.dates"],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
