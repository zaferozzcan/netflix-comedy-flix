import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import "../../styles/Row.css";

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
            <img key={index} src={movie.poster_path} alt={movie.name}></img>
          );
        })}
      </div>
    </div>
  );
}
