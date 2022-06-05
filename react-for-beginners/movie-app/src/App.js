import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    ).json();
    setMovies(json.data.movies);
    setLoading(true);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ?
        <div>{movies.map((movie) =>
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.medium_cover_image} />
            <ul>
              {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <p>{movie.summary}</p>
          </div>
        )}
        </div> : <h2>Loading...</h2>
      }
    </div>
  );
}

export default App;
