import React from "react";
import Row from "./components/rows/Row";
import Banner from "./components/banner/Banner";
import requests from "./requests";

export default function App() {
  return (
    <div>
      <Banner />
      <Row
        title={"Netflix Originals"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargerRow={true}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horrow Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomenceMovies} />
      <Row
        title={"Documentaries"}
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}
