import React, { useState, useEffect } from "react";
import "../../styles/Banner.css";
import axiosInstance from "../../axios";
import requests from "../../requests";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

export default function Banner() {
  const [movie, setMovie] = useState([]);
  // const [trailer, setTrailer] = useState(false);

  useEffect(() => {
    async function getMovie() {
      let request = await axiosInstance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length) - 1
        ]
      );
    }
    getMovie();
  }, []);
  //   console.log("randim movie", movie);

  const getMovieId = () => {};

  const handleClick = () => {
    trailer = true;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button onClick={handleClick} className="banner_button">
            My List
          </button>
        </div>
        <h1 className="banner_decs">{movie?.overview}</h1>
        <div className="banner_fadeBottom"></div>
      </div>

      <YouTube videoId={} opts={} />
    </header>
  );
}
