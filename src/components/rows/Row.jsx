import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import "../../styles/Row.css";

const image_base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const request = await axiosInstance.get(fetchUrl);
      //   console.log("req", request.data.results);
      setMovies(request.data.results);
    }
    getMovies();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie, index) => {
          return (
            <img
              className="row_poster"
              key={index}
              src={image_base_url + movie.poster_path}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
    </div>
  );
}
