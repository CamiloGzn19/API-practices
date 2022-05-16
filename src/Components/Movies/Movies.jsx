import axios from "axios";
import React, { useEffect, useState } from "react";

const Movies = () => {
  const key = "b8b55dd8618aa1f375e7df891f7a7d63";
  const url = "https://api.themoviedb.org/3";

  const [datos, setDatos] = useState([]);

  const getMovies = async () => {
    const data = await axios.get(`${url}/discover/movie`, {
      params: {
        api_key: key,
      },
    });
    console.log(data);
    setDatos(data.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <h1 className="title">Movies</h1>
      <div className="general">
        {datos.length !== 0
          ? datos.map((dat) => (
              <div key={dat.original_title} className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500${dat.poster_path}`}
                  alt={dat.original_title}
                />
                <p>{dat.original_title}</p>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Movies;
