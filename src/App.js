import React, { useState } from "react";
import "./App.css";
import Navbar1 from "./componants/Navbar1";
import MovieList from "./componants/MovieList";
import { dataMovies } from "./componants/data.js";

function App() {
  const [key, setKey] = useState("");
  const getkeyword = (keyword) => {
    setKey(keyword);
    return keyword;
  };
  const [data, setData] = useState(dataMovies);

  const search = (data) => {
    const filter = data.filter(
      (movie) =>
        movie.title.toLowerCase().includes(key) ||
        movie.rating.toString() >= key
    );
    return filter;
  };
  const filterarray = search(data);

  const AddMovie = (movie) => {
    setData([...data, movie]);
  };
  return (
    <div className="App">
      <div className="navbar1">
        <Navbar1
          data={data}
          getkeyword={getkeyword}
          search={search}
          AddMovie={AddMovie}
        />
      </div>
      <div className="container">
        <MovieList filter={filterarray} />
      </div>
    </div>
  );
}

export default App;
