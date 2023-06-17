import Home from "./components/Home";
import PopularityMovie from "./source/PopularityMovie";
import NowPlaying from "./source/NowPlaying";
import Upcoming from "./source/Upcoming";
import DetailMovies from "./source/DetailMovies";
// import SearchMovie from "./source/SearchMovie";
import NotFound from "./source/NotFound";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="popular-movie" element={<PopularityMovie />} />
        <Route path="now-playing" element={<NowPlaying />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="detail-movies/:id" element={<DetailMovies />} />
        {/* <Route path="search-movie" element={<SearchMovie />} /> */}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
