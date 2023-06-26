import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieFavorite";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
