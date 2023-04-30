import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import "./Home.css";
import axios from "axios";
const Home = () => {
  let [data, setData] = useState("");
  useEffect(getDataFromApi, []);

  function getDataFromApi() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=f03f3b6bd098a2a3eddaabe0b0fc8f43"
      )
      .then(
        (res) => {
          console.log("Api Call");
          setData(res.data);
        },
        (error) => {}
      );
  }

  return (
    <div className="home">
      <Banner data={data} />
      <MovieList data={data} />
      <Pagination />
    </div>
  );
};

function Banner(props) {
  return (
    <>
      {props.data === "" ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <div className="banner">
          <img
            className="bannerImage"
            src={
              "https://image.tmdb.org/t/p/original" +
              props.data.results[0].backdrop_path
            }
          />
          <div className="bannerTitle">{props.data.results[0].title}</div>
        </div>
      )}
    </>
  );
}

function MovieList(props) {
  let [pageMovie, setPageMovie] = useState();
  console.log("Movie List executed-> " + pageMovie);

  useEffect(() => {
    console.log("Use Effect executed-> " + props.data.results);
    setPageMovie(props.data.results);
  }, [props.data]);

  return (
    <>
      {props.data === "" || pageMovie === undefined ? (
        <h1 style={{ textAlign: "center" }}>Loading...</h1>
      ) : (
        <div className="movieList">
          <h1
            className="movieListHeading"
            style={{ fontFamily: "poppinsRegular" }}
          >
            TRENDING
          </h1>
          <div className="pageMovie">
            {pageMovie.map((obj, idx) => {
              return (
                <div key={idx} className="singleMovieItem">
                  <img
                    className="singleMovieItemImage"
                    src={"https://image.tmdb.org/t/p/w500/" + obj.poster_path}
                  ></img>
                  <div className="singleMovieItemTitle"> {obj.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
