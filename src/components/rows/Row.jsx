import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import "../../styles/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const image_base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargerRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function getMovies() {
      const request = await axiosInstance.get(fetchUrl);
      //   console.log("req", request.data.results);
      setMovies(request.data.results);
    }
    getMovies();
  }, [fetchUrl]);
  //   console.log(movies[0]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // console.log("movie", movie.original_title);
      movieTrailer(movie?.original_title || "")
        .then((url) => {
          console.log(url);
          // console.log("new", new URL(url).search);
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log("urlparams", urlParams.get("v"));
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie, index) => {
          return (
            <img
              className={isLargerRow ? "row_largerPoster" : "row_poster"}
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${image_base_url}${
                isLargerRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            ></img>
          );
        })}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
