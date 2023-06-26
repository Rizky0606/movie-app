import { createSlice } from "@reduxjs/toolkit";

const movieFavorite = createSlice({
  name: "movies",
  initialState: {
    movies: [],
  },
  reducers: {
    addFavoriteMovie: (state, action) => {
      const {
        id,
        title,
        popularity,
        vote_average,
        release_date,
        overview,
        poster_path,
      } = action.payload;
      state.movies.push({
        id,
        title,
        popularity,
        vote_average,
        release_date,
        overview,
        poster_path,
      });
    },
    deleteFavoriteMovie: (state, action) => {
      const { id } = action.payload;
      const index = state.movies.findIndex((movie) => movie.id === id);
      if (index !== -1) {
        state.movies.splice(index, 1);
      }
    },
  },
});

export const { addFavoriteMovie, deleteFavoriteMovie } = movieFavorite.actions;
export default movieFavorite.reducer;
