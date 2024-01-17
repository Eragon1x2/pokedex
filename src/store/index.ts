import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./pokemon.ts";
export const store = configureStore({
    reducer: {pokemon: pokemon},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch