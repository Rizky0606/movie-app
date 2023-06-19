import Home from "./components/Home";
import PopularityMovie from "./source/Movies/PopularityMovie";
import NowPlayingMovies from "./source/Movies/NowPlayingMovies";
import UpcomingMovies from "./source/Movies/UpcomingMovies";
import DetailMovies from "./source/Movies/DetailMovies";
import TrendingMovies from "./source/Movies/TrendingMovies";
// import SearchMovie from "./source/SearchMovie";
import PopularSeries from "./source/Series/PopularSeries";
import TopRated from "./source/Series/TopRated";
import OnTheAir from "./source/Series/OnTheAir";
import DetailSeries from "./source/Series/DetailSeries";
import NotFound from "./source/NotFound";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="movie">
          <Route path="popular-movies" element={<PopularityMovie />} />
          <Route path="now-playing" element={<NowPlayingMovies />} />
          <Route path="upcoming-movies" element={<UpcomingMovies />} />
          <Route path="trending-movies" element={<TrendingMovies />} />
          <Route path="detail-movies/:id" element={<DetailMovies />} />
        </Route>

        <Route path="series">
          <Route path="popular-series" element={<PopularSeries />} />
          <Route path="top-rated" element={<TopRated />} />
          <Route path="on-the-air" element={<OnTheAir />} />
          {/* <Route path="trending-series" element={<TrendingSeries />} /> */}
          <Route path="detail-series/:id" element={<DetailSeries />} />
        </Route>
        {/* <Route path="search-movie" element={<SearchMovie />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
